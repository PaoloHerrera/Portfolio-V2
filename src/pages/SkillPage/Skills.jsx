import { PageTitle } from '@/pages/PageTitle.jsx'
import { SkillCard } from '@/components/Skills/SkillCard.jsx'
import { frontend, backend, tools, learning } from './skills.js'
import styles from './Skills.module.css'

export const Skills = () => {
	return (
		<section id="skills" className={styles.skillsContainer}>
			<PageTitle title="Tecnologías" />

			<div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-14 mt-10">
				<SkillCard name={frontend.name} skills={frontend.items} />
				<SkillCard name={backend.name} skills={backend.items} />
				<SkillCard name={tools.name} skills={tools.items} />
				<SkillCard name={learning.name} skills={learning.items} />
			</div>
		</section>
	)
}
