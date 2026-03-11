/**
 * useThemeContext: returns ThemeContext value (theme, setTheme).
 * Must be used inside ThemeProvider; throws otherwise.
 */
import { useContext } from 'react'
import { ThemeContext } from '../context/themeState'

export function useThemeContext() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useThemeContext must be used within ThemeProvider')
  return ctx
}