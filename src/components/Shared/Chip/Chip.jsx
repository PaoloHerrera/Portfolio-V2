import styles from './Chip.module.css'

export const Chip = ({ children, className = '' }) => {
	return (
		<span
			className={`${className} ${styles.chip} flex flex-row gap-2 text-xs items-center text-white`}
		>
			{children}
		</span>
	) //
}
