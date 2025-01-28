import styles from './Title.module.css'

export const Title = ({ children, variant = 'primary' }) => {
	return <h3 className={`font-bold ${styles[variant]}`}>{children}</h3>
}
