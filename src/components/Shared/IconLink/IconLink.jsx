import styles from './IconLink.module.css'

export const IconLink = ({ href, children, target = '_blank' }) => {
	return (
		<a href={href} target={target} rel="noreferrer" className={styles.iconLink}>
			{children}
		</a>
	)
}
