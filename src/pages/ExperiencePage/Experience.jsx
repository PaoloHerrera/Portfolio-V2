import { PageTitle } from '@/pages/PageTitle.jsx'
import { ExperienceTimeline } from '@/components/Experience/ExperienceTimeline/ExperienceTimeline.jsx'
import { EXPERIENCE_ITEMS } from '@/constants.js'
import styles from './Experience.module.css'

export const Experience = () => {
	return (
		<section id="experience" className={styles.experienceContainer}>
			<PageTitle title="Experiencia" />

			<div className="w-full relative mt-10">
				<ExperienceTimeline items={EXPERIENCE_ITEMS} />
			</div>
		</section>
	)
}
