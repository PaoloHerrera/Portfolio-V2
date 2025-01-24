import './ExperienceComponents.css'
import { CalendarIcon } from '../../assets/Icons'

function ExperienceHeader({ company, date }) {
	return (
		<div className="flex md:flex-row md:justify-between experience-header flex-col">
			<h2 className="md:text-2xl font-bold text-xl">{company}</h2>
			<span className="font-bold text-md flex items-center">{date}</span>
			<span className="timeline-icon">
				<CalendarIcon />
			</span>
		</div>
	)
}

function ExperienceSubheader({ role, city, country }) {
	return (
		<div className="flex md:flex-row md:justify-between flex-col">
			<h3 className="md:text-xl font-bold text-secondary text-lg">{role}</h3>
			<span className="font-bold text-md flex items-center">
				{city}, {country}
			</span>
		</div>
	)
}

function ExperienceDescription({ children }) {
	return (
		<ul className="flex flex-col gap-3 experience-description">
			{children.map((item) => (
				<li key={item} className="text-md text-balance">
					{item}
				</li>
			))}
		</ul>
	)
}

function ExperienceCard({ item, className }) {
	return (
		<article className={`experience-card ${className}`}>
			<div className="experience-text-container flex flex-col gap-5 md:p-8 p-4">
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
			<div className="experience-time-line flex gap-10 flex-col">
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
