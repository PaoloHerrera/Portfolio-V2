import { HeroInfo } from '@/components/Hero/HeroInfo/HeroInfo.jsx'
import { HeroImage } from '@/components/Hero/HeroImage/HeroImage.jsx'
import { PROFESSIONAL_INFORMATION } from '@/constants.js'
import { leftVariants, opacityVariants } from '@/constants/variants.js'
import styles from './Hero.module.css'

export const Hero = () => {
	return (
		<section
			id="home"
			className={`${styles.heroSection} sm:flex-row flex-col-reverse justify-center sm:justify-between`}
		>
			<HeroInfo
				PROFESSIONAL_INFORMATION={PROFESSIONAL_INFORMATION}
				variants={leftVariants}
			/>
			<HeroImage
				image={PROFESSIONAL_INFORMATION.image}
				variants={opacityVariants}
			/>
		</section>
	)
}
