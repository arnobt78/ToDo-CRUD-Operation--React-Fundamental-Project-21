/**
 * TaskProvider: supplies task list (persisted in localStorage) and current-editing task to the tree.
 * tasklist is synced via useLocalStorage; task is in-memory only and resets when adding/updating.
 */
import { useState, type ReactNode } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import type { Task } from '../types'
import { TaskContext } from './taskState'

// Safely parse localStorage string to Task[]; invalid data falls back to []
function parseTasklist(raw: string): Task[] {
  try {
    const parsed = JSON.parse(raw) as unknown
    return Array.isArray(parsed) ? (parsed as Task[]) : []
  } catch {
    return []
  }
}

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasklist, setTasklist] = useLocalStorage<Task[]>('tasklist', [], parseTasklist)
  // task = the item being edited (prefilled in AddTask); {} when adding new
  const [task, setTask] = useState<Partial<Task>>({})

  return (
    <TaskContext.Provider value={{ tasklist, setTasklist, task, setTask }}>
      {children}
    </TaskContext.Provider>
  )
}
