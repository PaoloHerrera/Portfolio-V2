import SectionTitle from '../SectionTitle'
import { ExperienceTimeline } from './ExperienceComponents'
import { EXPERIENCE_ITEMS } from '../../constants'

export default function Experience() {
	return (
		<section
			id="experience"
			className="h-full w-full pt-32 grid grid-rows-12 gap-8"
		>
			<SectionTitle title="Experiencia" className="row-span-1" />

			<div className="w-full row-span-11 relative">
				<ExperienceTimeline items={EXPERIENCE_ITEMS} />
			</div>
		</section>
	)
}
