'use client'

import NextLink from 'next/link'
import Image from 'next/image'
import { Link } from 'react-scroll'
import { useState } from 'react'
import { SoundSwitch, ThemeSwitch } from '../switches'
import { FiMenu, FiX } from 'react-icons/fi'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full h-16 z-10 header-shadow-custom bg-yellow-200 dark:bg-brown top-5">
      <div className="flex justify-between items-center w-full h-full max-w-container mx-auto px-4">
        <NextLink href="/" className="z-10 p-6 md:p-0 lg:p-6 xl:p-11">
          <Image
            src={'/images/logo.png'}
            alt="logo-HJ"
            priority={true}
            width="48"
            height="48"
            // className="transition-all duration-300 transform hover:scale-110"
          />
        </NextLink>

        <nav
          className={`absolute right-0 flex justify-center items-center w-full transition-all duration-500 bg-yellow-200 dark:bg-brown md:justify-end md:h-full md:static
          ${isMenuOpen ? '-top-5 h-screen ' : 'top-[-100vh] h-[calc(100vh-20px)]'}`}
        >
          <ul
            className={`flex flex-col items-center justify-start gap-12  text-2xl md:text-xl font-semibold dark:font-medium md:flex-row md:justify-end md:gap-10 ${isMenuOpen ? 'h-full mt-64' : 'h-auto mt-0'}`}
          >
            <li>
              <Link
                className="inline-block cursor-pointer hover:text-yellow-300 hover:border-b-2 hover:border-yellow-300  border-transparent transition-all duration-300 transform hover:scale-110"
                to="home"
                spy={true}
                smooth={true}
                offset={-85} /* 위치 나중에 조절 */
                duration={700}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="inline-block cursor-pointer hover:text-yellow-300 hover:border-b-2 hover:border-yellow-300 border-transparent transition-all duration-300 transform hover:scale-110"
                to="about"
                spy={true}
                smooth={true}
                offset={-85} /* 위치 나중에 조절 */
                duration={700}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="inline-block cursor-pointer hover:text-yellow-300 hover:border-b-2 hover:border-yellow-300 border-transparent transition-all duration-300 transform hover:scale-110"
                to="skills"
                spy={true}
                smooth={true}
                offset={-85} /* 위치 나중에 조절 */
                duration={700}
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                className="inline-block cursor-pointer hover:text-yellow-300 hover:border-b-2 hover:border-yellow-300 border-transparent transition-all duration-300 transform hover:scale-110"
                to="projects"
                spy={true}
                smooth={true}
                offset={-85} /* 위치 나중에 조절 */
                duration={700}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="inline-block cursor-pointer hover:text-yellow-300 hover:border-b-2 hover:border-yellow-300 border-transparent transition-all duration-300 transform hover:scale-110"
                to="contact"
                spy={true}
                smooth={true}
                offset={-85} /* 위치 나중에 조절 */
                duration={700}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li className="flex">
              <ThemeSwitch />
            </li>
            <li className="flex">
              <SoundSwitch />
            </li>
          </ul>
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="z-50 md:hidden pr-6 hover:text-red-500"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {' '}
          {isMenuOpen ? <FiX size="40" /> : <FiMenu size="40" />}
        </button>
      </div>
    </header>
  )
}

export default Header
