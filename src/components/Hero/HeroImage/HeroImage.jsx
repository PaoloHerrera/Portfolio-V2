import styles from './HeroImage.module.css'
import { motion } from 'motion/react'
import { opacityVariants as variants } from '@/variants.js'

export const HeroImage = ({ image }) => {
	return (
		<motion.article
			className="flex items-center justify-center max-w-[300px] md:max-w-[400px] w-full h-full relative"
			variants={variants}
			initial="initial"
			animate="animate"
		>
			<div className="aspect-3/4 flex justify-center max-h-full relative">
				<img
					src={image.url}
					alt={image.alt}
					className={`${styles.heroImage} object-cover rounded-lg z-10`}
					loading="lazy"
				/>
				<div className="absolute bg-secondary bottom-0 h-screen w-1/2" />
			</div>
		</motion.article>
	)
}
