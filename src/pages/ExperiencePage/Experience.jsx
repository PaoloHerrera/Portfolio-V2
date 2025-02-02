import { PageTitle } from '@/pages/PageTitle.jsx'
import { ExperienceTimeline } from '@/components/Experience/ExperienceTimeline/ExperienceTimeline.jsx'
import { useTranslation } from '@/hooks/useTranslation.js'

export const Experience = () => {
	const { translate } = useTranslation()

	const title = translate('experience.title')

	const items = translate('experience.jobs')

	return (
		<section id="experience">
			<PageTitle title={title} />
			<ExperienceTimeline items={items} />
		</section>
	)
}
