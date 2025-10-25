import { motion } from 'motion/react'

export const TimelineLine = ({ scrollYProgress }) => {
	return (
		<motion.div
			className="fixed left-[20px] lg:left-1/2 top-0 w-[2px] h-full opacity-80 -z-10 bg-secondary"
			initial={{ scaleY: 0 }}
			style={{
				scaleY: scrollYProgress,
				transformOrigin: 'top',
			}}
		/>
	)
}
