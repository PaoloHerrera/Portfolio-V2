import { PageTitle } from '@/pages/PageTitle.jsx'
import { SkillCard } from '@/components/Skills/SkillCard.jsx'
import { FRONTEND, BACKEND, TOOLS, LEARNING } from './skills.js'

export const Skills = ({ title }) => {
	return (
		<section id="skills">
			<PageTitle title={title} />

			<div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-14 mt-20">
				<SkillCard name={FRONTEND.name} skills={FRONTEND.items} />
				<SkillCard name={BACKEND.name} skills={BACKEND.items} />
				<SkillCard name={TOOLS.name} skills={TOOLS.items} />
				<SkillCard name={LEARNING.name} skills={LEARNING.items} />
			</div>
		</section>
	)
}
