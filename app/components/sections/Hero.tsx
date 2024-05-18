'use client'

import { Link } from 'react-scroll'
import Image from 'next/image'
import { FiArrowRightCircle } from 'react-icons/fi'
import { useTheme } from 'next-themes'

export const Hero = () => {
  const { theme } = useTheme()

  return (
    <section className="pt-12 md:pt-20" id="home">
      <div className="flex-col md:flex-row flex items-center justify-around gap-8 lg:h-[600px] ">
        <Image
          src="/images/hero-pic.png"
          alt="coding girl image"
          width="500"
          height="500"
          priority
          className={`hero-img ${theme === 'dark' ? 'hero-img-dark' : 'hero-img-light'} w-[50%] md:w-[35%] h-auto z-10 rounded-full p-3 `}
        />

        <div className="mt-5 text-center md:mt-0 md:text-start">
          <h2 className="inline-block text-xl md:text-2xl text-center font-semibold tracking-wide px-4 py-2 mb-8 rounded-xl bg-yellow-100 dark:bg-brown">
            Welcome To My Portfolio!
          </h2>
          <span className="block text-xl md:text-2xl font-semibold tracking-wide pl-2">
            Hi, I&apos;m
          </span>
          <h1 className="my-name text-4xl md:text-5xl font-semibold tracking-wide py-1 pl-1">
            Hyejin Seok
          </h1>
          <p className="text-2xl md:text-3xl pl-2 mt-6 text-yellow-300 font-semibold">
            A Dedicated Full Stack Wev Developer
          </p>
          <p className="text-xl md:text-2xl pl-2 mt-3 mb-10">
            Crafting & coding engaging web experiences
          </p>
          <div className="px-3 py-2 ml-2 border-2 border-yellow-200 text-center rounded-lg inline-block text-lg md:text-xl font-semibold">
            <Link
              className="inline-block"
              to="contact"
              spy={true}
              smooth={true}
              offset={-120}
              duration={700}
            >
              Contact me
              <FiArrowRightCircle
                size="32"
                className="inline-block pl-2 md:md"
              />
            </Link>
          </div>

          <div></div>
        </div>
      </div>
    </section>
  )
}
