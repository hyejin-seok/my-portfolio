'use client'

import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-scroll'
import { useInView } from 'framer-motion'
import Image from 'next/image'
import { FiArrowRightCircle } from 'react-icons/fi'
import { useTheme } from 'next-themes'

export const Hero = () => {
  const { theme } = useTheme()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  let [count, setCount] = useState(0)
  const [text] = useState([
    'Design/Code full-stack apps',
    'Craft visually engaging user interfaces',
    'Create intuitive & user-friendly designs.',
    'Develop interactive & dynamic websites.'
  ])

  useEffect(() => {
    let interval = setInterval(() => {
      setCount(count + 1)

      if (count === 3) {
        setCount(0)
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [count])

  return (
    <section className="pt-12 md:pt-20" id="home">
      <div className="flex-col lg:flex-row flex items-center justify-around gap-8 lg:h-[600px] ">
        <Image
          src="/images/hero-pic.png"
          alt="coding girl image"
          width="500"
          height="500"
          priority
          className={`hero-img ${theme === 'dark' ? 'hero-img-dark' : 'hero-img-light'} w-[40%] lg:w-[35%] h-auto z-10 rounded-full p-3 `}
        />

        <div className="mt-5 text-center md:mt-0 md:text-start">
          <h2 className="inline-block text-xl md:text-2xl text-center font-bold dark:font-semibold tracking-wide px-4 py-2 mb-8 rounded-xl bg-yellow-100 dark:bg-brown">
            Welcome To My Portfolio!
          </h2>
          <span className="block text-xl md:text-2xl font-bold dark:font-semibold tracking-wide pl-2">
            Hi, I&apos;m
          </span>
          <h1 className="my-name text-4xl md:text-5xl font-bold dark:font-semibold tracking-wide py-1 pl-1">
            Hyejin Seok
          </h1>
          <p className="text-2xl md:text-3xl mt-6 text-yellow-300 font-bold dark:font-semibold">
            A Dedicated Full-Stack Web Developer
          </p>

          <div className="xs:text-lg sm:text-xl md:text-2xl mt-3 lg:mt-6 pl-1 font-semibold dark:font-normal relative flex flex-col overflow-hidden tracking-wide">
            <p
              ref={ref}
              className="transform-none opacity-100 text-start"
              style={{
                transform: isInView ? 'none' : 'translateX(-200px)',
                opacity: isInView ? 1 : 0,
                transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
              }}
            >
              I{' '}
              <span
                className="pl-0 md:pl-2 absolute flex flex-col transition-all duration-500 ease-in-expo"
                style={{
                  top:
                    count === 0
                      ? '0'
                      : count === 1
                        ? '-100%'
                        : count === 2
                          ? '-200%'
                          : count === 3
                            ? '-300%'
                            : '0',
                  left: '13px'
                }}
              >
                {text.map((element, index) => (
                  <TextElement key={index} element={element} />
                ))}
              </span>
            </p>
          </div>

          <div className="inline-block px-3 py-2 mt-6 border-2 border-yellow-200 text-center rounded-lg sm:text-lg md:text-xl font-bold dark:font-semibold tracking-wide">
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

interface TextElementProps {
  element: string
}

function TextElement({ element }: TextElementProps) {
  const firstWord = <b>{element.split(' ').at(0)}</b>
  const restWords = element.split(' ').slice(1).join(' ')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <span
      tabIndex={0}
      ref={ref}
      // className="text-[17px] md:text-2xl"
      style={{
        transform: isInView ? 'none' : 'translateX(-200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
      }}
    >
      {firstWord} {restWords}
    </span>
  )
}
