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
			className={`${styles.projectCard} h-[400px] min-w-[300px] flex flex-col gap-4 rounded-md relative shadow-xl hover:opacity-80 hover:scale-105 transition-all duration-300 ease-in-out`}
			initial={{ scale: 0.5, y: 50 }}
			whileInView={{ scale: 1, y: 0 }}
			transition={{ duration: 0.3, ease: 'easeInOut' }}
			viewport={{ once: false, margin: '0px 0px -110px 0px' }}
		>
			<div className="p-2 h-full">
				<img
					src={item.image}
					alt={item.alt}
					className="w-full object-cover h-full"
				/>
				<div className="absolute top-0 left-0 opacity-0 hover:opacity-100 p-10">
					<header className="flex flex-col gap-4">
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
						<p className="text-md opacity-90">{item.description}</p>
					</div>

					<footer className="flex flex-row gap-5 justify-center">
						<ButtonLink href={item.github} variant="secondary">
							<Github height="2rem" width="2rem" />
							Code
						</ButtonLink>
						<ButtonLink href={item.link} variant="secondary">
							<LinkIcon height="2rem" width="2rem" />
							Preview
						</ButtonLink>
					</footer>
				</div>
			</div>
		</motion.article>
	)
}
