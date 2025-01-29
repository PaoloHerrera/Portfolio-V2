import { IconLink } from '@/components/Shared/IconLink/IconLink.jsx'
import { MailIcon } from '@/components/Shared/Icons/Icons.jsx'
import { ButtonLink } from '@/components/Shared/Button/Button.jsx'
import { Github } from '@/components/Shared/Icons/Tools/Github.jsx'
import styles from './HeroInfo.module.css'
import { motion } from 'motion/react'
import { leftVariants as variants } from '@/variants.js'

const HeroTitle = ({ children }) => {
	return <h1 className="md:text-6xl text-4xl font-bold">{children}</h1>
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
			<IconLink href={github}>
				<Github height="2em" width="2em" />
			</IconLink>
			<IconLink href={`mailto:${email}`}>
				<MailIcon height="2em" width="2em" />
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
		<motion.article
			className={styles.heroInfo}
			variants={variants}
			initial="initial"
			animate="animate"
		>
			<HeroPersonalInfo
				name={`${name} ${lastName}`}
				profession={profession}
				presentation={presentation}
			/>
			<HeroLinks github={github} email={email} cv={cv} />
		</motion.article>
	)
}
