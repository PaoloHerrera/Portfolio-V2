import styles from './ExperienceCard.module.css'
import { List } from '@/components/Shared/List/List.jsx'
import { CalendarIcon } from '@/components/Shared/Icons/Icons.jsx'
import { ExperienceHeader } from './ExperienceHeader.jsx'
import { ExperienceSubheader } from './ExperienceSubheader.jsx'

export const ExperienceCard = ({ item, position }) => {
	return (
		<article
			className={`${styles.experienceCard} ${styles[position]} w-full lg:w-1/2`}
		>
			<div className="border border-black bg-black rounded-lg min-h-[320px] p-8 flex flex-col gap-5">
				<ExperienceHeader item={item} timelineIcon={<CalendarIcon />} />

				<ExperienceSubheader item={item} />

				<List items={item.description} />
			</div>
		</article>
	)
}
