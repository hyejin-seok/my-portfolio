'use client'

import { useTheme } from 'next-themes'
import { FiSun, FiMoon } from 'react-icons/fi'

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="text-3xl hover:text-orange-200"
    >
      {theme === 'dark' ? <FiSun /> : <FiMoon />}
    </button>
  )
}
