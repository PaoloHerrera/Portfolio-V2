import { Title } from '@/components/Shared/Title/Title.jsx'
import styles from './ExperienceCard.module.css'

export const ExperienceHeader = ({ item, timelineIcon }) => {
	return (
		<div className="flex flex-col md:flex-row md:justify-between">
			<Title>{item.company}</Title>
			<span className="font-bold text-md flex items-center">
				{item.date}
				<span className={styles.timelineIcon}>{timelineIcon}</span>
			</span>
		</div>
	)
}
