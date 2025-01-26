import './SectionTitle.css'

export default function SectionTitle({ title }) {
	return (
		<div className="flex flex-row justify-center items-center w-full title-container">
			<h2 className="font-bold text-nowrap md:text-5xl text-3xl text-secondary">
				{title}
			</h2>
		</div>
	)
}
