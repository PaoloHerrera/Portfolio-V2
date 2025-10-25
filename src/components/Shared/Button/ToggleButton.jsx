export const ToggleButton = ({ setIsMenuOpen, children }) => {
	return (
		<>
			<button
				type="button"
				className={'flex lg:hidden cursor-pointer text-secondary'}
				onClick={setIsMenuOpen}
				aria-label="Abrir menu"
			>
				{children}
			</button>
		</>
	)
}
