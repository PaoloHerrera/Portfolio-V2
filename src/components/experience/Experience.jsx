import SectionTitle from '../SectionTitle'
import { ExperienceTimeline } from './ExperienceComponents'
import { EXPERIENCE_ITEMS } from '../../constants'
import './Experience.css'

export default function Experience() {
	return (
		<section
			id="experience"
			className="experience-container w-full"
		>
			<SectionTitle title="Experiencia" />

			<div className="w-full relative md:mt-24 mt-5">
				<ExperienceTimeline items={EXPERIENCE_ITEMS} />
			</div>
		</section>
	)
}
