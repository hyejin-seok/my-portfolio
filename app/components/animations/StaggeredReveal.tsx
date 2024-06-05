'use client'
import { motion, useAnimation, useInView } from 'framer-motion'
import React, { useRef, useEffect } from 'react'

type StaggeredRevealProps = {
  children: React.ReactNode
}

export const StaggeredReveal = ({ children }: StaggeredRevealProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('show')
    }
  }, [controls, isInView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.2 } }
      }}
    >
      {children}
    </motion.div>
  )
}
