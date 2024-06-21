'use client'

import { Link } from 'react-scroll'
import Image from 'next/image'
import { FiArrowRightCircle } from 'react-icons/fi'
import { ChangeDescriptions } from '../Animations'
import { ScrollDown } from '../Buttons'

export const Hero = () => {
  return (
    <section
      className="mx-auto max-w-container px-4 pb-24 pt-4 md:pb-32 md:pt-20"
      id="home"
    >
      <div className=" flex flex-col items-center justify-around gap-5 md:gap-8 lg:h-[580px] lg:flex-row ">
        <div className="order-last mt-5 md:mt-0 lg:order-first">
          <h2 className="mb-8 w-fit rounded-xl bg-yellow-200 px-2 py-2 text-center text-base font-bold tracking-wide dark:bg-brown dark:font-semibold md:px-4 md:text-lg">
            Welcome To My&nbsp;Portfolio!
          </h2>
          <span className="block text-xl font-bold tracking-wide dark:font-semibold md:text-2xl">
            Hi, I&apos;m
          </span>
          <h1 className="my-name py-1 text-4xl font-bold tracking-wide dark:font-semibold md:text-6xl">
            Hyejin Seok
          </h1>
          <p className="mt-6 text-xl font-bold text-yellow-400 dark:font-semibold sm:text-2xl md:text-3xl">
            A Dedicated Full-Stack Web&nbsp;Developer
          </p>
          <ChangeDescriptions />
          <div className="mt-8 w-fit cursor-pointer rounded-lg border-4 border-double border-yellow-400 px-3 py-2 text-center text-lg font-semibold tracking-wide transition-all duration-500 hover:scale-105 hover:bg-yellow-400 hover:text-white dark:border-yellow-300 dark:hover:bg-yellow-100 dark:hover:text-black sm:text-xl md:text-2xl lg:mt-14">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
            >
              Contact me
              <FiArrowRightCircle className="inline-block h-8 w-8 pl-2 md:h-9 md:w-9 " />
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/hero-pic.webp"
            alt="coding girl image"
            width="500"
            height="500"
            priority
            className="h-auto w-[80%] animate-floating rounded-full p-3 shadow-hero-img-light dark:shadow-hero-img-dark lg:w-[100%]"
          />
        </div>
      </div>

      <ScrollDown />
    </section>
  )
}
