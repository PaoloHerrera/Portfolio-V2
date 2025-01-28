import styles from './CloseButton.module.css'

export const CloseButton = ({ setIsMenuOpen, children }) => {
	return (
		<button
			type="button"
			className={`${styles.closeButton} flex lg:hidden`}
			onClick={() => {
				setIsMenuOpen(false)
			}}
			aria-label="Cerrar menu"
		>
			{children}
		</button>
	)
}
