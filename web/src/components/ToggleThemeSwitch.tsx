import { Switch } from '@headlessui/react'
import { Moon, Sun } from 'phosphor-react'
import clsx from 'clsx'

import { useTheme } from '../hooks/useTheme'

export const ToggleThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Switch
      checked={theme === 'dark'}
      onChange={toggleTheme}
      className={clsx(
        'absolute top-4 right-4 inline-flex h-6 w-12 px-2 items-center rounded-full border',
        {
          'border-gray-100': theme === 'dark',
          'border-zinc-300': theme !== 'dark',
        },
      )}
    >
      <span className="sr-only">Enable darkMode</span>
      <span
        className={clsx('flex items-center transition', {
          'translate-x-3': theme === 'dark',
          'translate-x-0': theme !== 'dark',
        })}
      >
        {theme === 'light' ? (
          <Moon className="text-yellow-500" weight="bold" size={20} />
        ) : (
          <Sun weight="bold" size={16} />
        )}
      </span>
    </Switch>
  )
}
