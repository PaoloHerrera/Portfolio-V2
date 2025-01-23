import './ExperienceComponents.css'
import { CalendarIcon } from '../../assets/Icons'

function ExperienceHeader({ company, date }) {
	return (
		<div className="flex flex-row justify-between experience-header">
			<h2 className="text-2xl font-bold">{company}</h2>
			<span className="font-bold">{date}</span>
			<span className="timeline-icon">
				<CalendarIcon />
			</span>
		</div>
	)
}

function ExperienceSubheader({ role, city, country }) {
	return (
		<div className="flex flex-row justify-between">
			<h3 className="text-xl font-bold text-secondary">{role}</h3>
			<span className="font-bold">
				{city}, {country}
			</span>
		</div>
	)
}

function ExperienceDescription({ children }) {
	return (
		<ul className="flex flex-col gap-3 experience-description">
			{children.map((item) => (
				<li key={item} className="text-md">
					{item}
				</li>
			))}
		</ul>
	)
}

function ExperienceCard({ item, className }) {
	return (
		<article className={`experience-card ${className} `}>
			<div className="experience-text-container flex flex-col gap-5">
				<ExperienceHeader company={item.company} date={item.date} />
				<ExperienceSubheader
					role={item.role}
					city={item.city}
					country={item.country}
				/>
				<ExperienceDescription>{item.description}</ExperienceDescription>
			</div>
		</article>
	)
}

export function ExperienceTimeline({ items }) {
	return (
		<>
			<div className="experience-time-line">
				{items.map((item, index) => {
					const indexClass = index % 2 === 0 ? 'card-left' : 'card-right'
					return (
						<ExperienceCard key={item.id} item={item} className={indexClass} />
					)
				})}
			</div>
		</>
	)
}
