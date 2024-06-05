'use client'
import { motion, useAnimation, useInView } from 'framer-motion'
import React, { useRef, useEffect } from 'react'

type StaggeredChildProps = {
  children: React.ReactNode
  index: number
}

export const StaggeredChild = ({ children, index }: StaggeredChildProps) => {
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
        hidden: { opacity: 0, rotateY: 90 },
        visible: { opacity: 1, rotateY: 0 }
      }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      {children}
    </motion.div>
  )
}
