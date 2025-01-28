import './App.css'
import { Navbar } from './components/Shared/Navbar/Navbar.jsx'
import { Hero } from './pages/HeroPage/Hero.jsx'
import { Experience } from './pages/ExperiencePage/Experience.jsx'
import { Projects } from './components/projects/Projects.jsx'

export const App = () => {
	return (
		<div className="flex relative">
			<Navbar />
			<main className="flex flex-col justify-center items-center w-full">
				<Hero />
				<Experience />
				<Projects />
			</main>
		</div>
	)
}
