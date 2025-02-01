import { PageTitle } from '@/pages/PageTitle.jsx'
import { PROJECTS_ITEMS } from '@/constants.js'
import { ProjectCard } from '@/components/Projects/ProjectCard.jsx'

export const Projects = ({ title }) => {
	return (
		<section id="projects" className="projects-container">
			<PageTitle title={title} />

			<div className="flex flex-wrap mt-10 justify-center gap-40">
				{PROJECTS_ITEMS.map((item) => (
					<ProjectCard key={item.id} item={item} />
				))}
			</div>
		</section>
	)
}
