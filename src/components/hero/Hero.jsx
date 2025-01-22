import './Hero.css'
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

export default function Hero() {
	return (
		<section className="w-full flex justify-between items-center gap-52">
			<div className="w-1/2 text-left flex flex-col gap-7">
				<HeroTitle>
					{PROFESSIONAL_INFORMATION.name} {PROFESSIONAL_INFORMATION.lastName}
				</HeroTitle>
				<HeroSubtitle>{PROFESSIONAL_INFORMATION.profession}</HeroSubtitle>
				<HeroParagraph>{PROFESSIONAL_INFORMATION.presentation}</HeroParagraph>
				<div className="flex gap-7 justify-start">
					<HeroLink link={PROFESSIONAL_INFORMATION.github}>
						<GithubIcon />
					</HeroLink>
					<HeroLink link={`mailto:${PROFESSIONAL_INFORMATION.email}`}>
						<MailIcon />
					</HeroLink>
				</div>
				<HeroButton link={PROFESSIONAL_INFORMATION.cv.link}>
					{PROFESSIONAL_INFORMATION.cv.name}
				</HeroButton>
			</div>
			<div className="w-1/2 flex flex-col items-center justify-center relative">
				<VerticalColor />
				<HeroImage image={PROFESSIONAL_INFORMATION.image} />
			</div>
		</section>
	)
}
