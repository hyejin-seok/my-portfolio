'use client'
import { motion, useAnimation, useInView, Variants } from 'framer-motion'
import React, { useRef, useEffect } from 'react'

type AnimationWrapperProps = {
  children: React.ReactNode
  variants: Variants
  className?: string
}

export const AnimationWrapper = ({
  children,
  className,
  variants
}: AnimationWrapperProps) => {
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
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
