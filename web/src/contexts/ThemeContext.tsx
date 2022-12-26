import { createContext, ReactNode, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextProps {
  children: ReactNode
}

interface ThemeContextData {
  toggleTheme: () => void
  theme: Theme
}

export const ThemeContext = createContext({} as ThemeContextData)

export const ThemeProvider = ({ children }: ThemeContextProps) => {
  const [theme, setTheme] = useState<Theme>('light')

  function saveTheme(theme: Theme) {
    localStorage.setItem('theme', theme)
    setTheme(theme)
  }

  function toggleTheme() {
    if (theme === 'dark') {
      saveTheme('light')
    } else {
      saveTheme('dark')
    }
  }

  useEffect(() => {
    const storagedTheme = localStorage.getItem('theme')
    if (
      storagedTheme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      console.log('storagedTheme')
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
