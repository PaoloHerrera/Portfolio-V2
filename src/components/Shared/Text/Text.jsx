import styles from './Text.module.css'

export const Text = ({ children, variant = 'primary' }) => {
	return <p className={`${styles[variant]} text-lg`}>{children}</p>
}
