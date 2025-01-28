import styles from './Navbar.module.css'
import { NAVBAR_BRAND, NAVBAR_ITEMS } from '@/constants.js'
import { useMenu } from '@/hooks/useMenu.js'
import { NavbarBrand } from './NavbarBrand.jsx'
import { NavbarLinks } from './NavbarLinks.jsx'
import { ToggleButton } from '@/components/Shared/Button/ToggleButton.jsx'
import { CloseButton } from '@/components/Shared/Button/CloseButton.jsx'
import { MenuIcon } from '../Icons/Icons.jsx'
import { CloseIcon } from '../Icons/Icons.jsx'
import { Sidebar } from '../Sidebar/Sidebar.jsx'

export const Navbar = () => {
	const { isMenuOpen, setIsMenuOpen } = useMenu()

	return (
		<header>
			<nav className={styles.navbar}>
				<div className={styles.navListContainer}>
					<NavbarBrand item={NAVBAR_BRAND} />
					<div className="hidden lg:flex">
						<NavbarLinks items={NAVBAR_ITEMS} />
					</div>
					{!isMenuOpen && (
						<ToggleButton setIsMenuOpen={setIsMenuOpen}>
							<MenuIcon />
						</ToggleButton>
					)}
					{isMenuOpen && (
						<CloseButton setIsMenuOpen={setIsMenuOpen}>
							<CloseIcon />
						</CloseButton>
					)}
					<Sidebar isMenuOpen={isMenuOpen}>
						<NavbarLinks items={NAVBAR_ITEMS} />
					</Sidebar>
				</div>
			</nav>
		</header>
	)
}
