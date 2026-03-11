/**
 * Theme context definition: current theme and setter.
 * ThemeProvider persists theme to localStorage and applies the theme class to document.documentElement.
 */
import { createContext } from 'react'
import type { ThemeName } from '../types'

export interface ThemeContextValue {
  theme: ThemeName
  setTheme: React.Dispatch<React.SetStateAction<ThemeName>>
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)
