import { PageTitle } from '@/pages/PageTitle.jsx'
import { ExperienceTimeline } from '@/components/Experience/ExperienceTimeline/ExperienceTimeline.jsx'
import { EXPERIENCE_ITEMS } from '@/constants.js'

export const Experience = ({ title }) => {
	return (
		<section id="experience">
			<PageTitle title={title} />
			<ExperienceTimeline items={EXPERIENCE_ITEMS} />
		</section>
	)
}
