'use client'

import { Link } from 'react-scroll'
import Image from 'next/image'
import { FiArrowRightCircle } from 'react-icons/fi'
import { useTheme } from 'next-themes'
import { ChangeDescriptions } from '../animations'

export const Hero = () => {
  const { theme } = useTheme()

  return (
    <section className="pt-12 md:pt-20" id="home">
      <div className=" flex-col lg:flex-row flex items-center justify-around gap-8 lg:h-[600px] ">
        <div className="order-last lg:order-first mt-5 md:mt-0 ">
          <h2 className="w-fit text-xl md:text-2xl text-center font-bold dark:font-semibold tracking-wide px-4 py-2 mb-8 rounded-xl bg-yellow-100 dark:bg-brown">
            Welcome To My Portfolio!
          </h2>
          <span className="block text-xl md:text-2xl font-bold dark:font-semibold tracking-wide">
            Hi, I&apos;m
          </span>
          <h1 className="my-name text-3xl sm:text-4xl md:text-5xl font-bold dark:font-semibold tracking-wide py-1">
            Hyejin Seok
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mt-6 text-yellow-300 font-bold dark:font-semibold">
            A Dedicated Full-Stack Web Developer
          </p>

          <ChangeDescriptions />

          <div className="w-fit px-3 py-2 mt-8 lg:mt-14 border-2 border-yellow-200 text-center rounded-lg sm:text-lg md:text-xl font-bold dark:font-semibold tracking-wide">
            <Link
              // className="inline-block"
              to="contact"
              spy={true}
              smooth={true}
              offset={-120}
              duration={700}
            >
              Contact me
              <FiArrowRightCircle
                size="32"
                className="inline-block pl-2 md:md stroke-[2.5px]"
              />
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/hero-pic.png"
            alt="coding girl image"
            width="500"
            height="500"
            priority
            className={`hero-img ${theme === 'dark' ? 'hero-img-dark' : 'hero-img-light'}  w-[80%] lg:w-[100%] h-auto rounded-full p-3`}
          />
        </div>
      </div>
    </section>
  )
}
