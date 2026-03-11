/**
 * ThemeProvider: holds current theme (persisted in localStorage) and applies it as a class on <html>.
 * CSS in index.css defines .light, .medium, .dark, .gOne, .gTwo, .gThree for background styles.
 */
import { useEffect, type ReactNode } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import type { ThemeName } from '../types'
import { ThemeContext } from './themeState'

const THEMES: ThemeName[] = ['light', 'medium', 'dark', 'gOne', 'gTwo', 'gThree']
const DEFAULT_THEME: ThemeName = 'medium'

function parseTheme(raw: string): ThemeName {
  return (THEMES as readonly string[]).includes(raw) ? (raw as ThemeName) : DEFAULT_THEME
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useLocalStorage<ThemeName>(
    'theme',
    DEFAULT_THEME,
    (raw) => parseTheme(JSON.parse(raw) as string),
  )

  // Sync theme to DOM so global CSS (.light, .dark, etc.) applies
  useEffect(() => {
    document.documentElement.removeAttribute('class')
    document.documentElement.classList.add(theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
