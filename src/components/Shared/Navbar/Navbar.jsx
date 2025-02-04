import styles from './Navbar.module.css'
import { useMenu } from '@/hooks/useMenu.js'
import { NavbarBrand } from './NavbarBrand.jsx'
import { NavbarLinks } from './NavbarLinks.jsx'
import { ToggleButton } from '@/components/Shared/Button/ToggleButton.jsx'

import { ToggleIcon } from '../Icons/Animate/ToggleIcon.jsx'
import { Sidebar } from '../Sidebar/Sidebar.jsx'
import { opacityVariants } from '@/variants.js'

import { motion } from 'motion/react'

import { NAVBAR_BRAND } from '@/constants/navbar.js'

import { useTranslation } from '@/hooks/useTranslation.js'

export const Navbar = () => {
	const { isMenuOpen, setIsMenuOpen } = useMenu()

	const { translate } = useTranslation()

	const navbarItems = translate('navbar')

	return (
		<header>
			<nav
				className={`${styles.navbar} light:bg-nav-input-light dark:bg-nav-input-dark`}
			>
				<div className={styles.navListContainer}>
					<NavbarBrand item={NAVBAR_BRAND} />
					<motion.div
						className="hidden lg:flex"
						variants={opacityVariants}
						initial="initial"
						animate="animate"
					>
						<NavbarLinks items={navbarItems} />
					</motion.div>

					<ToggleButton setIsMenuOpen={() => setIsMenuOpen(!isMenuOpen)}>
						<ToggleIcon isOpen={isMenuOpen} />
					</ToggleButton>
					<Sidebar isMenuOpen={isMenuOpen}>
						<NavbarLinks items={navbarItems} />
					</Sidebar>
				</div>
			</nav>
		</header>
	)
}
