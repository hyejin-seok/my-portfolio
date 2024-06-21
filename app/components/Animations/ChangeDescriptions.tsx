'use client'
import { useEffect, useState, useRef, useMemo } from 'react'
import { useInView } from 'framer-motion'

export const ChangeDescriptions = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  let [count, setCount] = useState(0)

  const textDefault = useMemo(
    () => [
      'Design/Code full-stack apps',
      'Craft visually engaging user interfaces',
      'Create intuitive & user-friendly designs.',
      'Develop interactive & dynamic websites.'
    ],
    []
  )

  const textSmallScreen = useMemo(
    () => [
      'Design/Code full-stack apps',
      'Craft visually engaging UIs',
      'Create user-friendly designs',
      'Build interactive & dynamic sites'
    ],
    []
  )

  const [text, setText] = useState(textDefault)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 430) {
        setText(textSmallScreen)
      } else {
        setText(textDefault)
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [textDefault, textSmallScreen])

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % text.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [text.length])

  return (
    <div className="relative mt-3 flex flex-col overflow-hidden text-lg font-semibold tracking-wide dark:font-normal sm:text-xl md:text-2xl lg:mt-6">
      <p
        ref={ref}
        className="transform-none text-start opacity-100"
        style={{
          transform: isInView ? 'none' : 'translateX(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
        }}
      >
        I
        <span
          className="ease-in-expo absolute left-[11px] flex flex-col transition-all duration-500 xs:left-[12px] md:left-[13px]"
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
                      : '0'
            // left: '13px'
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
