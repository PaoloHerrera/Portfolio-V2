import SectionTitle from '../SectionTitle'
import { ExperienceTimeline } from './ExperienceComponents'
import { EXPERIENCE_ITEMS } from '../../constants'
import './Experience.css'

export default function Experience() {
	return (
		<section
			id="experience"
			className="experience-container w-full pt-32 grid grid-rows-4 gap-8"
		>
			<SectionTitle title="Experiencia" className="row-span-1" />

			<div className="w-full row-span-3 relative">
				<ExperienceTimeline items={EXPERIENCE_ITEMS} />
			</div>
		</section>
	)
}
