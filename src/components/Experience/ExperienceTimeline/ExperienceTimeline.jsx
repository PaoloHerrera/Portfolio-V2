import { ExperienceCard } from '../ExperienceCard/ExperienceCard.jsx'
import { TimelineLine } from './TimelineLine.jsx'

import { useScroll } from 'motion/react'
import { useRef } from 'react'

import styles from './ExperienceTimeline.module.css'

export const ExperienceTimeline = ({ items }) => {
	const ref = useRef(null)

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start 90%', 'end 90%'],
	})

	return (
		<div
			className={`${styles.experienceTimeline} gap-14 flex flex-col mt-20 relative`}
			ref={ref}
		>
			<TimelineLine scrollYProgress={scrollYProgress} />
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
