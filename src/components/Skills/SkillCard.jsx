import { SpotlightCard } from '@/components/Shared/SpotlightCard/SpotlightCard.jsx'
import { motion } from 'motion/react'

const SkillContent = ({ skills }) => {
	return (
		<div className="w-full flex flex-row gap-14 justify-center flex-wrap h-full items-center">
			{skills.map((skill) => (
				<div className="flex flex-col gap-2 items-center" key={skill.id}>
					<skill.icon height="3rem" width="3rem" />
					<span className="text-sm">{skill.name}</span>
				</div>
			))}
		</div>
	)
}

export const SkillCard = ({ name, skills }) => {
	return (
		<motion.article
			className="w-full"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, ease: 'easeInOut' }}
			viewport={{ once: false, margin: '0px 0px -110px 0px' }}
		>
			<SpotlightCard className="h-full">
				<div className="flex flex-col gap-14 items-center justify-center h-full">
					<h3 className="font-bold lg:text-4xl text-2xl">{name}</h3>
					<SkillContent skills={skills} />
				</div>
			</SpotlightCard>
		</motion.article>
	)
}
