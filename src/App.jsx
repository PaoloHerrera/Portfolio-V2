import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'

export default function App() {
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
