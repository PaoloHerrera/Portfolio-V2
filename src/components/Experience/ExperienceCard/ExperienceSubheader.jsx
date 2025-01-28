import { Title } from '@/components/Shared/Title/Title.jsx'

export const ExperienceSubheader = ({ item }) => {
	return (
		<div className="flex flex-col md:flex-row md:justify-between mb-5">
			<Title variant="secondary">{item.role}</Title>
			<span className="font-bold text-md flex items-center">
				{item.city}, {item.country}
			</span>
		</div>
	)
}
