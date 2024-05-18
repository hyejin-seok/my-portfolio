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
    <header className="fixed w-full h-16 shadow-custom bg-yellow-100 dark:bg-brown top-5 ">
      <div className="flex justify-center items-center w-full h-full max-w-container mx-auto px-4">
        <NextLink href="/" className="z-10 pl-6 md:p-0">
          <Image
            src={'/images/logo.png'}
            alt="logo-HJ"
            priority={true}
            width="44"
            height="44"
          />
        </NextLink>

        <nav
          className={`absolute right-0 flex justify-center items-center w-full transition-all duration-500 bg-yellow-100 dark:bg-brown md:justify-end md:h-full md:static
          ${isMenuOpen ? '-top-5 h-screen ' : 'top-[-100vh] h-[calc(100vh-20px)]'}`}
        >
          <ul className=" flex flex-col items-center gap-14 text-xl font-medium md:flex-row md:justify-end md:gap-10 md:text-lg">
            <li>
              <Link
                className="cursor-pointer hover:text-orange-200 hover:border-b-2 hover:border-orange-200 border-transparent transition-all duration-300"
                to="home"
                spy={true}
                smooth={true}
                offset={-120} /* 위치 나중에 조절 */
                duration={700}
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer hover:text-orange-200 hover:border-b-2 hover:border-orange-200 border-transparent transition-all duration-300"
                to="home"
                spy={true}
                smooth={true}
                offset={-120} /* 위치 나중에 조절 */
                duration={700}
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer hover:text-orange-200 hover:border-b-2 hover:border-orange-200 border-transparent transition-all duration-300"
                to="home"
                spy={true}
                smooth={true}
                offset={-120} /* 위치 나중에 조절 */
                duration={700}
                onClick={() => setIsMenuOpen(false)}
              >
                SKILLS
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer hover:text-orange-200 hover:border-b-2 hover:border-orange-200 border-transparent transition-all duration-300"
                to="home"
                spy={true}
                smooth={true}
                offset={-120} /* 위치 나중에 조절 */
                duration={700}
                onClick={() => setIsMenuOpen(false)}
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer hover:text-orange-200 hover:border-b-2 hover:border-orange-200 border-transparent transition-all duration-300"
                to="home"
                spy={true}
                smooth={true}
                offset={-120} /* 위치 나중에 조절 */
                duration={700}
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
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
          className="md:hidden z-10 pr-6"
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
