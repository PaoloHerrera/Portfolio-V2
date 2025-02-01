import styles from './HeroImage.module.css'
import { motion } from 'motion/react'
import { opacityVariants as variants } from '@/variants.js'

export const HeroImage = ({ image }) => {
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
			<div className={styles.verticalColor} />
		</motion.article>
	)
}
