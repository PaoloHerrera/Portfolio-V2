import { Github } from '@/components/Shared/Icons/Tools/Github.jsx'
import { LinkIcon } from '@/components/Shared/Icons/Icons.jsx'
import styles from './ProjectCard.module.css'
import { ButtonLink } from '@/components/Shared/Button/Button.jsx'
import { Chip } from '@/components/Shared/Chip/Chip.jsx'

import { motion } from 'motion/react'

export const ProjectCard = ({ item }) => {
	const technologies = [...item.technologies]

	return (
		<motion.article
			className={`${styles.projectCard} flex flex-col gap-4 w-full`}
			initial={{ scale: 0.5, y: 50 }}
			whileInView={{ scale: 1, y: 0 }}
			transition={{ duration: 0.3, ease: 'easeInOut' }}
			viewport={{ once: false, margin: '0px 0px -110px 0px' }}
		>
			<div className="flex flex-col-reverse md:flex-row gap-10">
				<div className="w-full md:w-1/2 flex flex-col md:gap-20 gap-10">
					<header className="flex flex-col gap-4 lg:gap-6">
						<h3 className="font-bold text-2xl md:text-4xl text-center">
							{item.name}
						</h3>
						<div className="flex flex-row gap-2 flex-wrap justify-center">
							{technologies.map((tech) => (
								<Chip key={tech.id} className={tech.bgcolor}>
									<tech.icon height="1rem" width="1rem" />
									{tech.name}
								</Chip>
							))}
						</div>
					</header>

					<div>
						<p className="opacity-90 md:text-lg">{item.description}</p>
					</div>

					<footer className="flex flex-wrap gap-5 justify-center">
						<ButtonLink href={item.github} variant="secondary">
							<Github height="1.5rem" width="1.5rem" />
							<span className="hidden sm:inline">Code</span>
						</ButtonLink>
						<ButtonLink href={item.link} variant="secondary" className="">
							<LinkIcon height="1.5rem" width="1.5rem" />
							<span className="hidden sm:inline">Preview </span>
						</ButtonLink>
					</footer>
				</div>

				<div className="aspect-16/9 md:w-1/2 w-full">
					<img
						src={item.image}
						alt={item.alt}
						className="w-full object-cover h-full"
					/>
				</div>
			</div>
		</motion.article>
	)
}
