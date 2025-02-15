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

import { LightIcon, DarkIcon } from '../Icons/Icons.jsx'

import { useTheme } from '@/hooks/useTheme.js'

export const Navbar = () => {
	const { menu, setMenu } = useMenu()

	const { translate } = useTranslation()

	const navbarItems = translate('navbar')

	const { theme, setTheme } = useTheme()

	const handleClick = () => {
		if (theme === 'light') {
			setTheme('dark')
		} else {
			setTheme('light')
		}
	}

	return (
		<header>
			<nav
				className={`${styles.navbar} light:bg-nav-input-light dark:bg-nav-input-dark`}
			>
				<div className={styles.navListContainer}>
					<NavbarBrand item={NAVBAR_BRAND} />
					<motion.div
						className="gap-10 justify-center items-center flex"
						variants={opacityVariants}
						initial="initial"
						animate="animate"
					>
						<div className="hidden lg:flex">
							<NavbarLinks items={navbarItems} />
						</div>

						{theme === 'light' && (
							<button
								type="button"
								className="cursor-pointer"
								onClick={handleClick}
							>
								<DarkIcon />
							</button>
						)}

						{theme === 'dark' && (
							<button
								type="button"
								className="cursor-pointer"
								onClick={handleClick}
							>
								<LightIcon />
							</button>
						)}
						<ToggleButton setIsMenuOpen={() => setMenu(!menu)}>
							<ToggleIcon isOpen={menu} />
						</ToggleButton>
					</motion.div>

					<Sidebar isMenuOpen={menu}>
						<NavbarLinks items={navbarItems} />
					</Sidebar>
				</div>
			</nav>
		</header>
	)
}
