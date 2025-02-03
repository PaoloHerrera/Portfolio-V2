import { IconLink } from '@/components/Shared/IconLink/IconLink.jsx'
import { MailIcon } from '@/components/Shared/Icons/Icons.jsx'
import { ButtonLink } from '@/components/Shared/Button/Button.jsx'
import { Github } from '@/components/Shared/Icons/Tools/Github.jsx'
import styles from './HeroInfo.module.css'
import { motion } from 'motion/react'
import { leftVariants as variants } from '@/variants.js'

const HeroLinks = ({ github, email, cv }) => {
	return (
		<div className={styles.heroLinks}>
			<IconLink href={github}>
				<Github height="1.5rem" width="1.5rem" />
			</IconLink>
			<IconLink href={`mailto:${email}`}>
				<MailIcon height="1.5rem" width="1.5rem" />
			</IconLink>
			<ButtonLink href={cv.link} isDownload={true}>
				{cv.name}
			</ButtonLink>
		</div>
	)
}

export const HeroInfo = ({ info }) => {
	const { name, lastName, profession, description, github, email, cv } = info

	return (
		<motion.article
			className={styles.heroInfo}
			variants={variants}
			initial="initial"
			animate="animate"
		>
			<h1 className="md:text-6xl text-4xl font-bold">{`${name} ${lastName}`}</h1>
			<h2 className="text-secondary xl:text-3xl text-xl font-bold">
				{profession}
			</h2>
			<p className="xl:text-xl text-lg opacity-90">{description}</p>
			<HeroLinks github={github} email={email} cv={cv} />
		</motion.article>
	)
}
