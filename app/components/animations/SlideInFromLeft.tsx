'use client'
import { motion, useAnimation, useInView } from 'framer-motion'
import React, { useRef, useEffect } from 'react'

type SlideInFromLeftProps = {
  children: React.ReactNode
}

export const SlideInFromLeft = ({ children }: SlideInFromLeftProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 }
      }}
      transition={{ ease: 'easeInOut', duration: 1, delay: 0.4 }}
    >
      {children}
    </motion.div>
  )
}
