import styles from './ExperienceTimeline.module.css'
import { motion } from 'motion/react'

export const TimelineLine = ({ scrollYProgress }) => {
	return (
		<motion.div
			className={styles.timelineLine}
			initial={{ scaleY: 0 }}
			style={{
				scaleY: scrollYProgress,
			}}
		/>
	)
}
