import { HeroInfo } from '@/components/Hero/HeroInfo/HeroInfo.jsx'
import { HeroImage } from '@/components/Hero/HeroImage/HeroImage.jsx'
import { useTranslation } from '@/hooks/useTranslation.js'
import styles from './Hero.module.css'
import { PERSONAL_INFO } from '@/constants/personalInfo.js'

export const Hero = () => {
	const { translate } = useTranslation()

	const heroData = {
		name: PERSONAL_INFO.name,
		lastName: PERSONAL_INFO.lastName,
		profession: translate('hero.profession'),
		description: translate('hero.description'),
		github: PERSONAL_INFO.github,
		email: PERSONAL_INFO.email,
		cv: {
			name: translate('hero.cv.name'),
			link: PERSONAL_INFO.cv.link,
		},
		image: {
			url: PERSONAL_INFO.image.url,
			alt: translate('hero.alt'),
		},
	}

	return (
		<section
			id="home"
			className={`${styles.heroSection} md:flex-row flex-col-reverse justify-center md:justify-between`}
		>
			<HeroInfo info={heroData} />
			<HeroImage image={heroData.image} />
		</section>
	)
}
