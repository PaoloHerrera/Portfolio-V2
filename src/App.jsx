import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Experience from './components/experience/Experience'

export default function App() {
	return (
		<div className="flex relative">
			<Navbar />
			<main className="flex flex-col justify-center items-center w-full">
				<Hero />
				<Experience />
			</main>
		</div>
	)
}
