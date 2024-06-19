'use client'

import { useTheme } from 'next-themes'
import { FiSun, FiMoon } from 'react-icons/fi'

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative transform text-3xl transition-transform duration-300 hover:scale-110 hover:text-yellow-700 dark:hover:text-yellow-300"
    >
      {theme === 'dark' ? <FiSun /> : <FiMoon />}
      <span className="absolute inset-0 -m-1 rounded-full border-2 border-transparent transition-all duration-500 hover:border-yellow-700 hover:dark:border-yellow-300"></span>
    </button>
  )
}
