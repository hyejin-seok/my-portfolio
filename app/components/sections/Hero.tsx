'use client'

import { Link } from 'react-scroll'
import Image from 'next/image'
import { FiArrowRightCircle } from 'react-icons/fi'
import { useTheme } from 'next-themes'
import { ChangeDescriptions } from '../animations'
import { HiOutlineChevronDoubleDown } from 'react-icons/hi'

export const Hero = () => {
  const { theme } = useTheme()

  return (
    <section className="max-w-container mx-auto px-4 py-16 md:py-20" id="home">
      <div className=" flex-col lg:flex-row flex items-center justify-around gap-8 lg:h-[600px] ">
        <div className="order-last lg:order-first mt-5 md:mt-0 ">
          <h2 className="w-fit text-xl md:text-2xl text-center font-bold dark:font-semibold tracking-wide px-4 py-2 mb-8 rounded-xl bg-yellow-200 dark:bg-brown">
            Welcome To My Portfolio!
          </h2>
          <span className="block text-xl md:text-2xl font-bold dark:font-semibold tracking-wide">
            Hi, I&apos;m
          </span>
          <h1 className="my-name text-4xl sm:text-5xl md:text-5xl font-bold dark:font-semibold tracking-wide py-1">
            Hyejin Seok
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mt-6 text-yellow-400 font-bold dark:font-semibold">
            A Dedicated Full-Stack Web Developer
          </p>

          <ChangeDescriptions />

          <div className="cursor-pointer w-fit px-3 py-2 mt-8 lg:mt-14 border-4 border-double border-yellow-400 dark:border-yellow-300 text-center rounded-lg text-lg sm:text-xl md:text-2xl font-bold dark:font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:bg-yellow-100 dark:hover:bg-yellow-200">
            <Link
              // className="inline-block"
              to="contact"
              spy={true}
              smooth={true}
              offset={-85}
              duration={700}
            >
              Contact me
              <FiArrowRightCircle className="inline-block pl-2 w-8 h-8 md:w-9 md:h-9 " />
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
            className="hero-img shadow-hero-img-light dark:shadow-hero-img-dark w-[80%] lg:w-[100%] h-auto rounded-full p-3"
          />
        </div>
      </div>
      <div className="w-fit mx-auto mt-10 md:mt-0 p-1 text-base font-semibold rounded-full bg-yellow-300 dark:bg-yellow-200 shadow-scroll-to-top">
        <HiOutlineChevronDoubleDown className="text-3xl" />
      </div>
    </section>
  )
}
