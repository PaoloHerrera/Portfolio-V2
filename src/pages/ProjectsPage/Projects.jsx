import { ProjectCard } from '@/components/Projects/ProjectCard.jsx'
import { useTranslation } from '@/hooks/useTranslation.js'
import { PageTitle } from '@/pages/PageTitle.jsx'

export const Projects = () => {
	const { translate } = useTranslation()

	const title = translate('projects.title')

	const projectItems = translate('projects.items')

	return (
		<section id="projects" className="projects-container">
			<PageTitle title={title} />

			<div className="flex flex-wrap mt-10 justify-center gap-40">
				{projectItems.map((item) => (
					<ProjectCard key={item.id} item={item} />
				))}
			</div>
		</section>
	)
}
