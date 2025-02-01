import './App.css'
import { Navbar } from './components/Shared/Navbar/Navbar.jsx'
import { Hero } from './pages/HeroPage/Hero.jsx'
import { Experience } from './pages/ExperiencePage/Experience.jsx'
import { Projects } from './pages/ProjectsPage/Projects.jsx'
import { Skills } from './pages/SkillPage/Skills.jsx'
import { Contact } from './pages/ContactPage/Contact.jsx'
import { Footer } from './components/Shared/Footer/Footer.jsx'

export const App = () => {
	return (
		<div className="relative h-full">
			<Navbar />
			<main className="flex flex-col justify-center items-center w-full">
				<Hero />
				<Experience title="Experiencia" />
				<Projects title="Proyectos" />
				<Skills title="Tecnologías" />
				<Contact title="Contacto" />
			</main>
			<Footer />
		</div>
	)
}
