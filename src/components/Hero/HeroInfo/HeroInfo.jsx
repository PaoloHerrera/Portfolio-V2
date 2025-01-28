import { IconLink } from '@/components/Shared/IconLink/IconLink.jsx'
import { GithubIcon, MailIcon } from '@/components/Shared/Icons/Icons.jsx'
import { ButtonLink } from '@/components/Shared/Button/Button.jsx'
import styles from './HeroInfo.module.css'

const HeroTitle = ({ children }) => {
	return <h1 className="xl:text-6xl text-4xl font-bold">{children}</h1>
}

const HeroSubtitle = ({ children }) => {
	return (
		<h2 className="text-secondary xl:text-3xl text-xl font-bold">{children}</h2>
	)
}

const HeroParagraph = ({ children }) => {
	return <p className="xl:text-xl text-lg opacity-90">{children}</p>
}

const HeroPersonalInfo = ({ PROFESSIONAL_INFORMATION }) => {
	return (
		<>
			<HeroTitle>
				{PROFESSIONAL_INFORMATION.name} {PROFESSIONAL_INFORMATION.lastName}
			</HeroTitle>
			<HeroSubtitle>{PROFESSIONAL_INFORMATION.profession}</HeroSubtitle>
			<HeroParagraph>{PROFESSIONAL_INFORMATION.presentation}</HeroParagraph>
		</>
	)
}

const HeroLinks = ({ PROFESSIONAL_INFORMATION }) => {
	return (
		<div className={styles.heroLinks}>
			<IconLink link={PROFESSIONAL_INFORMATION.github}>
				<GithubIcon />
			</IconLink>
			<IconLink link={`mailto:${PROFESSIONAL_INFORMATION.email}`}>
				<MailIcon />
			</IconLink>
			<ButtonLink href={PROFESSIONAL_INFORMATION.cv.link} isDownload={true}>
				{PROFESSIONAL_INFORMATION.cv.name}
			</ButtonLink>
		</div>
	)
}

export const HeroInfo = ({ PROFESSIONAL_INFORMATION }) => {
	return (
		<article className={styles.heroInfo}>
			<HeroPersonalInfo PROFESSIONAL_INFORMATION={PROFESSIONAL_INFORMATION} />
			<HeroLinks PROFESSIONAL_INFORMATION={PROFESSIONAL_INFORMATION} />
		</article>
	)
}
