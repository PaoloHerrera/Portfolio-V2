import { motion } from 'motion/react'
import styles from './ExperienceTimeline.module.css'

export const TimelineLine = ({ scrollYProgress }) => {
	return (
		<motion.div
			className={styles.timelineLine}
			initial={{ scaleY: 0 }}
			style={{
				scaleY: scrollYProgress,
				transformOrigin: 'top',
			}}
		/>
	)
}
