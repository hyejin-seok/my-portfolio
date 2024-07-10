'use client'
import { motion, Variants } from 'framer-motion'

type AnimationWrapperProps = {
  children: React.ReactNode
  variants: Variants
  className?: string
}

export const AnimationWrapper = ({
  children,
  variants,
  className
}: AnimationWrapperProps) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      variants={variants}
      viewport={{ once: true, amount: 0.25 }} //only plays once when 25% of the element is in view.
    >
      {children}
    </motion.div>
  )
}
