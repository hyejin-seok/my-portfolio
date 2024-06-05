'use client'
import { motion, useAnimation, useInView } from 'framer-motion'
import React, { useRef, useEffect } from 'react'

type FadeInDownProps = {
  children: React.ReactNode
}

export const FadeInDown = ({ children }: FadeInDownProps) => {
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
        hidden: { opacity: 0, y: -60 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
    >
      {children}
    </motion.div>
  )
}
