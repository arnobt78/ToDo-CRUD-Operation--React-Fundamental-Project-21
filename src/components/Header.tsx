import { ClipboardList } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { ThemeName } from '../types'

const THEME_KEY = 'theme'
const DEFAULT_THEME: ThemeName = 'medium'

const THEMES: ThemeName[] = ['light', 'medium', 'dark', 'gOne', 'gTwo', 'gThree']

function getStoredTheme(): ThemeName {
  try {
    const raw = localStorage.getItem(THEME_KEY)
    if (!raw) return DEFAULT_THEME
    const parsed = JSON.parse(raw) as string
    return (THEMES as readonly string[]).includes(parsed)
      ? (parsed as ThemeName)
      : DEFAULT_THEME
  } catch {
    return DEFAULT_THEME
  }
}

export function Header() {
  const [theme, setTheme] = useState<ThemeName>(getStoredTheme)

  useEffect(() => {
    localStorage.setItem(THEME_KEY, JSON.stringify(theme))
    document.documentElement.removeAttribute('class')
    document.documentElement.classList.add(theme)
  }, [theme])

  return (
    <header>
      <div className="logo">
        <span className="logoIcon" aria-hidden>
          <ClipboardList size={28} strokeWidth={2} />
        </span>
        <span className="logoText">Taskmate</span>
      </div>
      <div className="themeSelector">
        <span
          role="button"
          tabIndex={0}
          onClick={() => setTheme('light')}
          onKeyDown={(e) => e.key === 'Enter' && setTheme('light')}
          className={theme === 'light' ? 'light activeTheme' : 'light'}
          aria-label="Light theme"
        />
        <span
          role="button"
          tabIndex={0}
          onClick={() => setTheme('medium')}
          onKeyDown={(e) => e.key === 'Enter' && setTheme('medium')}
          className={theme === 'medium' ? 'medium activeTheme' : 'medium'}
          aria-label="Medium theme"
        />
        <span
          role="button"
          tabIndex={0}
          onClick={() => setTheme('dark')}
          onKeyDown={(e) => e.key === 'Enter' && setTheme('dark')}
          className={theme === 'dark' ? 'dark activeTheme' : 'dark'}
          aria-label="Dark theme"
        />
        <span
          role="button"
          tabIndex={0}
          onClick={() => setTheme('gOne')}
          onKeyDown={(e) => e.key === 'Enter' && setTheme('gOne')}
          className={theme === 'gOne' ? 'gOne activeTheme' : 'gOne'}
          aria-label="Gradient one theme"
        />
        <span
          role="button"
          tabIndex={0}
          onClick={() => setTheme('gTwo')}
          onKeyDown={(e) => e.key === 'Enter' && setTheme('gTwo')}
          className={theme === 'gTwo' ? 'gTwo activeTheme' : 'gTwo'}
          aria-label="Gradient two theme"
        />
        <span
          role="button"
          tabIndex={0}
          onClick={() => setTheme('gThree')}
          onKeyDown={(e) => e.key === 'Enter' && setTheme('gThree')}
          className={theme === 'gThree' ? 'gThree activeTheme' : 'gThree'}
          aria-label="Gradient three theme"
        />
      </div>
    </header>
  )
}
