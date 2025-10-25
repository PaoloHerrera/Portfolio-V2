export const Chip = ({ children, className = '' }) => {
	return (
		<span
			className={`${className} flex flex-row gap-2 text-xs items-center text-white py-1 px-2 rounded-2xl leading-5`}
		>
			{children}
		</span>
	)
}
