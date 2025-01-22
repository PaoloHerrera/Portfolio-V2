import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'

export default function App() {
	return (
		<div className="flex relative">
			<Navbar />
			<main className="flex flex-col justify-center items-center w-full">
				<Hero />
			</main>
		</div>
	)
}
