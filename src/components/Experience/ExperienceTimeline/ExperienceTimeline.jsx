import { ExperienceCard } from '../ExperienceCard/ExperienceCard.jsx'
import styles from './ExperienceTimeline.module.css'

export const ExperienceTimeline = ({ items }) => {
	return (
		<div
			className={`${styles.experienceTimeline} relative gap-10 flex flex-col`}
		>
			{items.map((item, index) => (
				<ExperienceCard
					key={item.id}
					item={item}
					position={index % 2 === 0 ? 'left' : 'right'}
				/>
			))}
		</div>
	)
}
