'use client'
import { motion, useAnimation, useInView } from 'framer-motion'
import React, { useRef, useEffect } from 'react'

type FadeInUpProps = {
  children: React.ReactNode
  className?: string
}

export const FadeInUp = ({ children, className }: FadeInUpProps) => {
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
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
    >
      {children}
    </motion.div>
  )
}
