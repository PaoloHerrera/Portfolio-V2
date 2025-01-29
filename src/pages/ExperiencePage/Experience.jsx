import { PageTitle } from '@/pages/PageTitle.jsx'
import { ExperienceTimeline } from '@/components/Experience/ExperienceTimeline/ExperienceTimeline.jsx'
import { EXPERIENCE_ITEMS } from '@/constants.js'

export const Experience = ({ title }) => {
	return (
		<section id="experience">
			<PageTitle title={title} />

			<div className="w-full relative mt-10">
				<ExperienceTimeline items={EXPERIENCE_ITEMS} />
			</div>
		</section>
	)
}
