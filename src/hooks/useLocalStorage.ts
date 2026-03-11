/**
 * useLocalStorage: persists state to localStorage and restores on mount.
 * Returns [value, setValue] like useState; setValue supports updater functions.
 * Optional parse/serialize customize read/write (e.g. for non-JSON or validation).
 */
import { useState, useCallback, useEffect } from 'react'

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
  parse?: (raw: string) => T,
  serialize?: (value: T) => string,
): [T, (value: T | ((prev: T) => T)) => void] {
  const read = useCallback((): T => {
    try {
      const raw = localStorage.getItem(key)
      if (raw == null) return initialValue
      return parse ? parse(raw) : (JSON.parse(raw) as T)
    } catch {
      return initialValue
    }
  }, [key, initialValue, parse])

  const [state, setState] = useState<T>(read)

  // Write to localStorage whenever state changes
  useEffect(() => {
    const raw = serialize ? serialize(state) : JSON.stringify(state)
    localStorage.setItem(key, raw)
  }, [key, state, serialize])

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      setState((prev) => (typeof value === 'function' ? (value as (p: T) => T)(prev) : value))
    },
    [],
  )

  return [state, setValue]
}
