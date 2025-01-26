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
		<section
			id="home"
			className="w-full flex sm:flex-row flex-col-reverse justify-center md:justify-between items-center gap-10"
		>
			<article className="text-left flex flex-col gap-7 w-full h-full justify-center">
				<HeroTitle>
					{PROFESSIONAL_INFORMATION.name} {PROFESSIONAL_INFORMATION.lastName}
				</HeroTitle>
				<HeroSubtitle>{PROFESSIONAL_INFORMATION.profession}</HeroSubtitle>
				<HeroParagraph>{PROFESSIONAL_INFORMATION.presentation}</HeroParagraph>
				<div className="flex gap-7 justify-start items-center">
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
			<article className="w-full h-full flex items-center justify-center">
				<div className="h-full flex flex-col justify-center items-center hero-image-container relative max-w-[300px] md:max-w-full">
					<HeroImage image={PROFESSIONAL_INFORMATION.image} />
					<VerticalColor />
				</div>
			</article>
		</section>
	)
}
