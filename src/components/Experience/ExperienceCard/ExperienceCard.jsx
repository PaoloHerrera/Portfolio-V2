import styles from './ExperienceCard.module.css'
import { List } from '@/components/Shared/List/List.jsx'
import { CalendarIcon } from '@/components/Shared/Icons/Icons.jsx'
import { SpotlightCard } from '@/components/Shared/SpotlightCard/SpotlightCard.jsx'
import { motion } from 'motion/react'
import { useTheme } from '@/hooks/useTheme.js'

export const ExperienceCard = ({ item, position }) => {
	const { theme } = useTheme()

	return (
		<article
			className={`${styles.experienceCard} ${styles[position]} w-full lg:w-1/2`}
		>
			<motion.div
				className="w-full"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: 'easeInOut' }}
				viewport={{ once: false, margin: '0px 0px -110px 0px' }}
			>
				<SpotlightCard
					className="min-h-[320px] p-8 flex flex-col gap-5 light:bg-bg-light dark:bg-bg-dark"
					spotlightColor={
						theme === 'light'
							? 'rgba(0, 0, 0, 0.25)'
							: 'rgba(255, 255, 255, 0.25)'
					}
				>
					<div className="flex flex-col md:flex-row md:justify-between gap-4">
						<h3 className="font-black text-xl">{item.company}</h3>
						<span className="font-light flex items-center">{item.date}</span>
					</div>

					<div className="flex flex-col md:flex-row md:justify-between mb-5 gap-3">
						<h4 className="font-bold text-lg text-secondary">{item.role}</h4>
						<span className="font-light flex items-center">
							{item.city}, {item.country}
						</span>
					</div>

					<List items={item.description} />
				</SpotlightCard>
			</motion.div>

			<motion.span
				className={`${styles.timelineIcon} light:bg-nav-input-light dark:bg-nav-input-dark`}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.5, ease: 'easeInOut' }}
				viewport={{ once: false, margin: '0px 0px -100px 0px' }}
			>
				<CalendarIcon />
			</motion.span>
		</article>
	)
}
