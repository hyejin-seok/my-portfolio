'use client'

import { Link } from 'react-scroll'

export const ScrollDown = () => {
  return (
    <Link
      to="about"
      spy={true}
      smooth={true}
      offset={-85}
      duration={700}
      aria-label="Scroll to About section"
      className="flex cursor-pointer justify-center"
    >
      <button
        aria-label="Scroll to About section"
        className="mt-4 flex flex-col items-center text-sm text-yellow-200 hover:opacity-70 focus:outline-none sm:mt-2"
      >
        <div className="relative mb-1 h-14 w-9 rounded-full border-2 border-yellow-200 ">
          <div className="before:absolute before:left-1/2 before:top-2.5 before:h-3 before:w-3 before:-translate-x-1/2 before:transform before:animate-scroll-down before:rounded-full before:bg-yellow-200 before:content-['']"></div>
        </div>
        Scroll Down
      </button>
    </Link>
  )
}
