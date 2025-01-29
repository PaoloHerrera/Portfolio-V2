import styles from './Button.module.css'
export const ButtonLink = ({
	children,
	href,
	variant = 'primary',
	isDownload = false,
}) => {
	return (
		<a
			href={href}
			download={isDownload}
			target={isDownload ? undefined : '_blank'}
			rel={isDownload ? undefined : 'noreferrer'}
			className={`${styles.button} ${styles[variant]} ml-2`}
		>
			{children}
		</a>
	)
}

export const Button = ({ children, variant = 'primary', type, onClick }) => {
	return (
		<button
			className={`${styles.button} ${styles[variant]}`}
			type={type}
			onClick={onClick}
		>
			{children}
		</button>
	)
}
