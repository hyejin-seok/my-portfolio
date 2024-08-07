const fadeInDownVar = {
  hidden: { opacity: 0, y: -70 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.3, ease: 'easeOut' }
  }
}
const fadeInUPVar = {
  hidden: { opacity: 0, y: 70 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.2, ease: 'easeOut' }
  }
}

const slideInFromLeftVar = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: 0.2, ease: 'easeInOut' }
  }
}

const staggeredRevealVar = {
  hidden: {},
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 }
  }
}

const staggeredChildVarX = {
  hidden: { opacity: 0, rotateX: 150 },
  visible: {
    opacity: 1,
    rotateX: 0,
    transition: { duration: 1.5 }
  }
}

const staggeredChildVarY = {
  hidden: { opacity: 0, rotateY: 100 },
  visible: {
    opacity: 1,
    rotateY: 0,
    transition: { duration: 1.5 }
  }
}

export {
  fadeInDownVar,
  fadeInUPVar,
  slideInFromLeftVar,
  staggeredRevealVar,
  staggeredChildVarX,
  staggeredChildVarY
}
