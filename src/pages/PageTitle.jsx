export const PageTitle = ({ title, id }) => {
	return (
		<div className="flex flex-row justify-center items-center w-full mt-[20px] h-[80px]">
			<h2
				id={id}
				className="font-bold text-nowrap md:text-5xl text-3xl text-secondary"
			>
				{title}
			</h2>
		</div>
	)
}
