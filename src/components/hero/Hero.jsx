import { GithubIcon, MailIcon } from '../../assets/Icons'
import {
	HeroButton,
	HeroLink,
	HeroSubtitle,
	HeroParagraph,
	HeroTitle,
	VerticalColor,
	HeroImage,
} from './HeroComponents'
import { PROFESSIONAL_INFORMATION } from '../../constants'
import './Hero.css'

export default function Hero() {
	return (
		<section
			id="home"
			className="hero-section sm:flex-row flex-col-reverse justify-center sm:justify-between"
		>
			<article className="hero-info">
				<HeroTitle>
					{PROFESSIONAL_INFORMATION.name} {PROFESSIONAL_INFORMATION.lastName}
				</HeroTitle>
				<HeroSubtitle>{PROFESSIONAL_INFORMATION.profession}</HeroSubtitle>
				<HeroParagraph>{PROFESSIONAL_INFORMATION.presentation}</HeroParagraph>
				<div className="hero-links">
					<HeroLink link={PROFESSIONAL_INFORMATION.github}>
						<GithubIcon />
					</HeroLink>
					<HeroLink link={`mailto:${PROFESSIONAL_INFORMATION.email}`}>
						<MailIcon />
					</HeroLink>
					<HeroButton link={PROFESSIONAL_INFORMATION.cv.link}>
						{PROFESSIONAL_INFORMATION.cv.name}
					</HeroButton>
				</div>
			</article>
			<article className="hero-image-container max-w-[300px] md:max-w-full">
				<HeroImage image={PROFESSIONAL_INFORMATION.image} />
				<VerticalColor />
			</article>
		</section>
	)
}
