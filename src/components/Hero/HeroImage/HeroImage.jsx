import styles from './HeroImage.module.css'
import { motion } from 'motion/react'
import { opacityVariants as variants } from '@/variants.js'

export const HeroImage = ({ image }) => {
	return (
		<motion.article
			className="relative flex items-center justify-center max-w-[300px] md:max-w-[500px] w-full h-full"
			variants={variants}
			initial="initial"
			animate="animate"
		>
			<div className="aspect-3/4 relative w-full">
				<img
					src={image.url}
					alt={image.alt}
					className={`${styles.heroImage} object-cover rounded-lg absolute z-10`}
					loading="lazy"
				/>
			</div>
			<div className={styles.verticalColor} />
		</motion.article>
	)
}
