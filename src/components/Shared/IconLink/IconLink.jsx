import styles from './IconLink.module.css'

export const IconLink = ({ href, children, target = '_blank' }) => {
	return (
		<a
			href={href}
			target={target}
			rel={target === '_blank' ? 'noopener noreferrer' : undefined}
			className={`${styles.iconLink} p-2`}
		>
			{children}
		</a>
	)
}
