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

const HeroPersonalInfo = ({ name, profession, presentation }) => {
	return (
		<>
			<HeroTitle>{name}</HeroTitle>
			<HeroSubtitle>{profession}</HeroSubtitle>
			<HeroParagraph>{presentation}</HeroParagraph>
		</>
	)
}

const HeroLinks = ({ github, email, cv }) => {
	return (
		<div className={styles.heroLinks}>
			<IconLink link={github}>
				<GithubIcon />
			</IconLink>
			<IconLink link={`mailto:${email}`}>
				<MailIcon />
			</IconLink>
			<ButtonLink href={cv.link} isDownload={true}>
				{cv.name}
			</ButtonLink>
		</div>
	)
}

export const HeroInfo = ({ PROFESSIONAL_INFORMATION }) => {
	const { name, lastName, profession, presentation, github, email, cv } =
		PROFESSIONAL_INFORMATION

	return (
		<article className={styles.heroInfo}>
			<HeroPersonalInfo
				name={`${name} ${lastName}`}
				profession={profession}
				presentation={presentation}
			/>
			<HeroLinks github={github} email={email} cv={cv} />
		</article>
	)
}
