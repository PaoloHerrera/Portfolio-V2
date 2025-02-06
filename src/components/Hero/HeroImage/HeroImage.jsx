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
			<div className="aspect-3/4 flex justify-center">
				<img
					src={image.url}
					alt={image.alt}
					className={`${styles.heroImage} w-60 sm:w-72 object-cover aspect-square rounded-lg md:w-full z-10`}
					loading="lazy"
				/>
				<div className="w-1/2 absolute h-full top-0 bg-secondary" />
			</div>
		</motion.article>
	)
}
