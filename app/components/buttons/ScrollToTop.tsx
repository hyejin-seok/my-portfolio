'use client'

import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    const scrollTop = window.scrollY

    if (scrollTop > 800) {
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

  return (
    <Link
      to="home"
      spy={true}
      smooth={true}
      offset={-85}
      duration={700}
      aria-label="Scroll to About section"
    >
      <button
        aria-label="Scroll to top"
        className={`fixed bottom-4 right-4 font-medium text-yellow-400 hover:opacity-70  focus:outline-none dark:text-yellow-200 ${isVisible ? 'opacity-100' : 'opacity-0'} `}
      >
        Top
        <div className="relative mt-1 h-14 w-9 rounded-full border-2 border-yellow-400 dark:border-yellow-200 ">
          <div className="before:absolute before:left-1/2 before:top-2.5 before:h-3 before:w-3 before:-translate-x-1/2 before:transform before:animate-scroll-top before:rounded-full before:bg-yellow-400 before:content-[''] before:dark:bg-yellow-200"></div>
        </div>
      </button>
    </Link>
  )
}
