'use client'

import { useTheme } from 'next-themes'
import { FiSun, FiMoon } from 'react-icons/fi'

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="text-3xl relative transition-transform transform duration-300 hover:scale-110 hover:text-yellow-300"
    >
      {theme === 'dark' ? <FiSun /> : <FiMoon />}
      <span className="absolute inset-0 -m-1 border-2 border-transparent rounded-full transition-all duration-500 hover:border-yellow-300"></span>
    </button>
  )
}
