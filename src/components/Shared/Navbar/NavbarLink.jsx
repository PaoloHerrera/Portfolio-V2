import styles from './NavbarLink.module.css'

export const NavbarLink = ({ link, name }) => {
	return (
		<a href={link} className={styles.navbarLink}>
			<span className="font-bold text-lg">{name}</span>
		</a>
	)
}
