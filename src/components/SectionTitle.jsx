import './SectionTitle.css'

export default function SectionTitle({ title }) {
	return (
		<div className="flex flex-row justify-center items-center w-full h-full">
			<h2 className="font-bold text-nowrap md:text-5xl text-3xl">
				{title}
				<span className="text-secondary">.</span>
			</h2>
			<div className="title-horizontal-line" />
		</div>
	)
}
