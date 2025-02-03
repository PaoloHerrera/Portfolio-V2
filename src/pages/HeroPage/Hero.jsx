import { HeroInfo } from '@/components/Hero/HeroInfo/HeroInfo.jsx'
import { HeroImage } from '@/components/Hero/HeroImage/HeroImage.jsx'
import { useTranslation } from '@/hooks/useTranslation.js'
import styles from './Hero.module.css'

export const Hero = () => {
	const { translate } = useTranslation()

	const heroData = {
		name: translate('hero.name'),
		lastName: translate('hero.lastName'),
		profession: translate('hero.profession'),
		description: translate('hero.description'),
		github: translate('hero.github'),
		email: translate('hero.email'),
		cv: {
			name: translate('hero.cv.name'),
			link: translate('hero.cv.link'),
		},
		image: {
			url: translate('hero.image.url'),
			alt: translate('hero.image.alt'),
		},
	}

	return (
		<section
			id="home"
			className={`${styles.heroSection} sm:flex-row flex-col-reverse justify-center sm:justify-between`}
		>
			<HeroInfo info={heroData} />
			<HeroImage image={heroData.image} />
		</section>
	)
}
