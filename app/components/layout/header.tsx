'use client'

import NextLink from 'next/link'
import Image from 'next/image'
import { Link } from 'react-scroll'
import { useState } from 'react'
import { SoundSwitch, ThemeSwitch } from '../Switches'
import { FiMenu, FiX } from 'react-icons/fi'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-5 z-10 h-16 w-full bg-yellow-200 shadow-header dark:bg-brown">
      <div className="mx-auto flex h-full w-full max-w-container items-center justify-between px-4">
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
          className={`absolute right-0 flex w-full items-center justify-center bg-yellow-200 transition-all duration-500 dark:bg-brown md:static md:h-full md:justify-end
          ${isMenuOpen ? '-top-5 h-screen ' : 'top-[-100vh] h-[calc(100vh-20px)]'}`}
        >
          <ul
            className={`flex flex-col items-center justify-start gap-12  text-2xl font-semibold dark:font-medium md:flex-row md:justify-end md:gap-10 md:text-xl ${isMenuOpen ? 'mt-64 h-full' : 'mt-0 h-auto'}`}
          >
            <li>
              <Link
                className="inline-block transform cursor-pointer border-transparent transition-all  duration-300 hover:scale-110 hover:border-b-2 hover:border-yellow-300 hover:text-yellow-300"
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
                className="inline-block transform cursor-pointer border-transparent transition-all duration-300 hover:scale-110 hover:border-b-2 hover:border-yellow-300 hover:text-yellow-300"
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
                className="inline-block transform cursor-pointer border-transparent transition-all duration-300 hover:scale-110 hover:border-b-2 hover:border-yellow-300 hover:text-yellow-300"
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
                className="inline-block transform cursor-pointer border-transparent transition-all duration-300 hover:scale-110 hover:border-b-2 hover:border-yellow-300 hover:text-yellow-300"
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
                className="inline-block transform cursor-pointer border-transparent transition-all duration-300 hover:scale-110 hover:border-b-2 hover:border-yellow-300 hover:text-yellow-300"
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
          className="z-50 pr-6 transition-all  duration-300 hover:scale-110 hover:text-yellow-300 md:hidden"
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
