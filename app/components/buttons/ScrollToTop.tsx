'use client'

import { useEffect, useState } from 'react'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
// import { FiChevronsUp } from 'react-icons/fi'

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    const scrollTop = window.scrollY

    if (scrollTop > 100) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`flex flex-col items-center fixed bottom-4 right-4 z-50 p-2 text-xs sm:text-sm md:text-base font-semibold rounded-full bg-yellow-300 dark:bg-yellow-200 shadow-scroll-to-top transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <HiOutlineChevronDoubleUp className="text-xl sm:text-2xl md:text-3xl" />
      Top
    </button>
  )
}
