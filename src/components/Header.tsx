/**
 * Header: app branding (logo + name) and theme switcher.
 * Reads/updates theme via useThemeContext(); ThemeProvider persists it to localStorage and applies class to document.
 */
import { ClipboardList } from 'lucide-react'
import { useThemeContext } from '../hooks/useThemeContext'
import type { ThemeName } from '../types'

const THEMES: ThemeName[] = ['light', 'medium', 'dark', 'gOne', 'gTwo', 'gThree']

export function Header() {
  const { theme, setTheme } = useThemeContext()

  return (
    <header>
      <div className="logo">
        <span className="logoIcon" aria-hidden>
          <ClipboardList size={28} strokeWidth={2} />
        </span>
        <span className="logoText">Taskmate</span>
      </div>
      <div className="themeSelector">
        {THEMES.map((t) => (
          <span
            key={t}
            role="button"
            tabIndex={0}
            onClick={() => setTheme(t)}
            onKeyDown={(e) => e.key === 'Enter' && setTheme(t)}
            className={theme === t ? `${t} activeTheme` : t}
            aria-label={`${t} theme`}
          />
        ))}
      </div>
    </header>
  )
}
