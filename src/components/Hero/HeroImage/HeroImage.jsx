import { VerticalColor } from './VerticalColor.jsx'
import styles from './HeroImage.module.css'
import { motion } from 'motion/react'

export const HeroImage = ({ image, variants }) => {
	return (
		<motion.article
			className={`${styles.heroImageContainer} max-w-[300px] md:max-w-full`}
			variants={variants}
			initial="initial"
			animate="animate"
		>
			<img
				src={image.url}
				alt={image.alt}
				className={`${styles.heroImage} sm:w-full w-auto sm:h-auto`}
			/>
			<VerticalColor style={styles.verticalColor} />
		</motion.article>
	)
}
