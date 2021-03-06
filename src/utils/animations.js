export const ROTATE_WHILE_TAP = {
  initial: { opacity: 0, scale: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 1.5 },
  whileTap: { scale: 0.5, rotate: 180 },
}

export const ROTATE_ON_HOVER = {
  whileHover: { rotate: 360 },
  transition: {
    ease: 'easeInOut',
    duration: 0.5,
  },
}

export const ARRIVE_FROM_TOP = {
  animate: { y: 0, opacity: 1 },
  initial: { y: -50, opacity: 0 },
  transition: {
    ease: 'easeInOut',
    duration: 1,
  },
}
