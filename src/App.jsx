import './App.css'
import { Footer } from './components/Shared/Footer/Footer.jsx'
import { Navbar } from './components/Shared/Navbar/Navbar.jsx'
import { About } from './pages/AboutPage/About.jsx'
import { Contact } from './pages/ContactPage/Contact.jsx'
import { Experience } from './pages/ExperiencePage/Experience.jsx'
import { Hero } from './pages/HeroPage/Hero.jsx'
import { Projects } from './pages/ProjectsPage/Projects.jsx'
import { Skills } from './pages/SkillPage/Skills.jsx'

import { AppProvider } from './context/AppProvider.jsx'

export const App = () => {
	return (
		<div className="relative h-full light:bg-bg-light bg-bg-dark light:text-text-light text-text-dark">
			<AppProvider>
				<Navbar />
				<main className="flex flex-col justify-center items-center w-full">
					<Hero />
					<Experience />
					<Projects />
					<Skills />
					<About />
					<Contact />
				</main>
				<Footer />
			</AppProvider>
		</div>
	)
}
