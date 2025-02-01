import styles from './Navbar.module.css'
import { NAVBAR_BRAND, NAVBAR_ITEMS } from '@/constants.js'
import { useMenu } from '@/hooks/useMenu.js'
import { NavbarBrand } from './NavbarBrand.jsx'
import { NavbarLinks } from './NavbarLinks.jsx'
import { ToggleButton } from '@/components/Shared/Button/ToggleButton.jsx'

import { ToggleIcon } from '../Icons/Animate/ToggleIcon.jsx'
import { Sidebar } from '../Sidebar/Sidebar.jsx'
import { opacityVariants } from '@/variants.js'

import { motion } from 'motion/react'

export const Navbar = () => {
	const { isMenuOpen, setIsMenuOpen } = useMenu()

	return (
		<header>
			<nav className={styles.navbar}>
				<div className={styles.navListContainer}>
					<NavbarBrand item={NAVBAR_BRAND} />
					<motion.div
						className="hidden lg:flex"
						variants={opacityVariants}
						initial="initial"
						animate="animate"
					>
						<NavbarLinks items={NAVBAR_ITEMS} />
					</motion.div>

					<ToggleButton setIsMenuOpen={() => setIsMenuOpen(!isMenuOpen)}>
						<ToggleIcon isOpen={isMenuOpen} />
					</ToggleButton>
					<Sidebar isMenuOpen={isMenuOpen}>
						<NavbarLinks items={NAVBAR_ITEMS} />
					</Sidebar>
				</div>
			</nav>
		</header>
	)
}
