import { ButtonLink } from '@/components/Shared/Button/Button.jsx'
import { IconLink } from '@/components/Shared/IconLink/IconLink.jsx'
import { Github } from '@/components/Shared/Icons/Tools/Github.jsx'
import { MailIcon } from '@/components/Shared/Icons/icons.jsx'
import { leftVariants as variants } from '@/variants.js'
import { motion } from 'motion/react'

const HeroLinks = ({ github, email, cv }) => {
	return (
		<div className="flex justify-start items-center gap-[1.75rem]">
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
			className="text-left flex flex-col w-full h-full justify-center gap-[1.75rem]"
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
