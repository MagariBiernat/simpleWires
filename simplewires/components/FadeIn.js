import React from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const FadeIn = ({ children, className, duration }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  React.useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])
  return (
    <motion.div
      className={className}
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn
