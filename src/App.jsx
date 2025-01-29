import './App.css'
import { Navbar } from './components/Shared/Navbar/Navbar.jsx'
import { Hero } from './pages/HeroPage/Hero.jsx'
import { Experience } from './pages/ExperiencePage/Experience.jsx'
// import { Projects } from './components/projects/Projects.jsx'
import { Skills } from './pages/SkillPage/Skills.jsx'
import { Contact } from './pages/ContactPage/Contact.jsx'

export const App = () => {
	return (
		<div className="flex relative">
			<Navbar />
			<main className="flex flex-col justify-center items-center w-full">
				<Hero />
				<Experience title="Experiencia" />
				{/* <Projects /> */}
				<Skills title="Tecnologías" />
				<Contact title="Contacto" />
			</main>
		</div>
	)
}
