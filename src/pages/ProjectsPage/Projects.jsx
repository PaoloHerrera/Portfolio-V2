import { PageTitle } from '@/pages/PageTitle.jsx'
import { PROJECTS_ITEMS } from '@/constants.js'
import { ProjectCard } from '@/components/Projects/ProjectCard.jsx'
import { useRef } from 'react'

export const Projects = ({ title }) => {
	const ref = useRef()

	return (
		<section id="projects" className="projects-container">
			<PageTitle title={title} />

			<div className="flex flex-wrap gap-2 mt-10 justify-center" ref={ref}>
				{PROJECTS_ITEMS.map((item) => (
					<ProjectCard key={item.id} item={item} />
				))}
			</div>
		</section>
	)
}
