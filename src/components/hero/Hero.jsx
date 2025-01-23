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
			className="w-full flex md:flex-row flex-col-reverse justify-center md:justify-between items-center md:gap-52"
		>
			<article className="md:w-1/2 text-left flex flex-col gap-7 w-full h-1/2 md:h-full justify-center">
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
			<article className="md:w-1/2  relative w-full h-1/2 md:h-full">
				<div className="max-w-96 md:max-w-full w-full h-full flex flex-col justify-center items-center">
					<VerticalColor />
					<HeroImage image={PROFESSIONAL_INFORMATION.image} />
				</div>
			</article>
		</section>
	)
}
