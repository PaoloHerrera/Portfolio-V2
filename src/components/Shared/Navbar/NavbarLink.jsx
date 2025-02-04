import styles from './NavbarLink.module.css'
import { useMenu } from '@/hooks/useMenu.js'

export const NavbarLink = ({ link, name }) => {
	const { setMenu } = useMenu()

	return (
		<a href={link} className={styles.navbarLink} onClick={() => setMenu(false)}>
			<span className="font-bold text-lg">{name}</span>
		</a>
	)
}
