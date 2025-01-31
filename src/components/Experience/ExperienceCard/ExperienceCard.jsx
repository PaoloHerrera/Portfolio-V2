import styles from './ExperienceCard.module.css'
import { List } from '@/components/Shared/List/List.jsx'
import { CalendarIcon } from '@/components/Shared/Icons/Icons.jsx'
import { Title } from '@/components/Shared/Title/Title.jsx'
import { SpotlightCard } from '@/components/Shared/SpotlightCard/SpotlightCard.jsx'

import { motion } from 'motion/react'

const ExperienceHeader = ({ item }) => {
	return (
		<div className="flex flex-col md:flex-row md:justify-between gap-4">
			<Title>{item.company}</Title>
			<span className="font-bold text-md flex items-center">{item.date}</span>
		</div>
	)
}

const ExperienceSubheader = ({ item }) => {
	return (
		<div className="flex flex-col md:flex-row md:justify-between mb-5 gap-3">
			<Title variant="secondary">{item.role}</Title>
			<span className="font-bold text-md flex items-center">
				{item.city}, {item.country}
			</span>
		</div>
	)
}

export const ExperienceCard = ({ item, position }) => {
	return (
		<article
			className={`${styles.experienceCard} ${styles[position]} w-full lg:w-1/2`}
		>
			<motion.div
				className="w-full"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.3, ease: 'easeInOut' }}
				viewport={{ once: false, margin: '0px 0px -110px 0px' }}
			>
				<SpotlightCard className="min-h-[320px] p-8 flex flex-col gap-5">
					<ExperienceHeader item={item} />

					<ExperienceSubheader item={item} />

					<List items={item.description} />
				</SpotlightCard>
			</motion.div>

			<motion.span
				className={styles.timelineIcon}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.3, ease: 'easeInOut' }}
				viewport={{ once: false, margin: '0px 0px -100px 0px' }}
			>
				<CalendarIcon />
			</motion.span>
		</article>
	)
}
