import { SkillCard } from '@/components/Skills/SkillCard.jsx'
import { BACKEND, FRONTEND, LEARNING, TOOLS } from '@/constants/skills.js'
import { useTranslation } from '@/hooks/useTranslation.js'
import { PageTitle } from '@/pages/PageTitle.jsx'

export const Skills = () => {
	const { translate } = useTranslation()

	const title = translate('skills.title')

	const i18nToolsName = translate('skills.tools')
	const i18nLearningName = translate('skills.learning')

	return (
		<section id="skills">
			<PageTitle title={title} />

			<div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-14 mt-20">
				<SkillCard name={FRONTEND.name} skills={FRONTEND.items} />
				<SkillCard name={BACKEND.name} skills={BACKEND.items} />
				<SkillCard name={i18nToolsName} skills={TOOLS.items} />
				<SkillCard name={i18nLearningName} skills={LEARNING.items} />
			</div>
		</section>
	)
}
