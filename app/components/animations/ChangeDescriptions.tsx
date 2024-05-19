'use client'

import { useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'

export const ChangeDescriptions = () => {
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
    <div className="xs:text-lg sm:text-xl md:text-2xl mt-3 lg:mt-6 font-semibold dark:font-normal relative flex flex-col overflow-hidden tracking-wide">
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
          className=" absolute flex flex-col transition-all duration-500 ease-in-expo"
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
