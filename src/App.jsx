import './App.css'
import { Navbar } from './components/Shared/Navbar/Navbar.jsx'
import { Hero } from './pages/HeroPage/Hero.jsx'
import { Experience } from './pages/ExperiencePage/Experience.jsx'
import { Projects } from './pages/ProjectsPage/Projects.jsx'
import { Skills } from './pages/SkillPage/Skills.jsx'
import { Contact } from './pages/ContactPage/Contact.jsx'
import { Footer } from './components/Shared/Footer/Footer.jsx'

import { LangProvider } from './context/langProvider.jsx'

export const App = () => {
	return (
		<div className="relative h-full">
			<LangProvider>
				<Navbar />
				<main className="flex flex-col justify-center items-center w-full">
					<Hero />
					<Experience />
					<Projects />
					<Skills />
					<Contact />
				</main>
				<Footer />
			</LangProvider>
		</div>
	)
}
