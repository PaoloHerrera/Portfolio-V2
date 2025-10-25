import { opacityVariants as variants } from '@/variants.js'
import { motion } from 'motion/react'
import styles from './HeroImage.module.css'

export const HeroImage = ({ image }) => {
	return (
		<motion.article
			className="h-1/2 sm:h-full sm:w-1/2 max-w-[500px] relative"
			variants={variants}
			initial="initial"
			animate="animate"
		>
			<div className="h-full aspect-3/4 w-full flex justify-center items-center">
				<img
					src={image.url}
					alt={image.alt}
					className={`${styles.heroImage} object-cover max-h-full w-full z-10`}
					loading="lazy"
				/>
				<div className="absolute bg-secondary bottom-0 h-full w-1/2" />
			</div>
		</motion.article>
	)
}
