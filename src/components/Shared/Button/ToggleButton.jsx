import styles from './ToggleButton.module.css'

export const ToggleButton = ({ setIsMenuOpen, children }) => {
	return (
		<>
			<button
				type="button"
				className={`${styles.toggleButton} flex lg:hidden`}
				onClick={() => {
					setIsMenuOpen(true)
				}}
				aria-label="Abrir menu"
			>
				{children}
			</button>
		</>
	)
}
