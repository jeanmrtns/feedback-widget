import clsx from 'clsx'
import { ToggleThemeSwitch } from './components/ToggleThemeSwitch'

import { Widget } from './components/Widget'
import { useTheme } from './hooks/useTheme'

export const App = () => {
  const { theme } = useTheme()

  return (
    <div
      className={clsx('page', {
        dark: theme === 'dark',
      })}
    >
      <ToggleThemeSwitch />
      <Widget />
    </div>
  )
}
