import styles from './NavbarLink.module.css'

export const NavbarLink = ({ item }) => {
	return (
		<a href={item.link} className={styles.navbarLink}>
			<span className="font-bold text-lg">{item.name}</span>
		</a>
	)
}
