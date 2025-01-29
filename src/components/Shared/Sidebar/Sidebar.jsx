import { motion } from 'motion/react'
import { variants } from './variants.js'

import styles from './Sidebar.module.css'

export const Sidebar = ({ children, isMenuOpen }) => {
	return (
		<motion.aside
			className={styles.sidebar}
			initial="initial"
			animate={isMenuOpen ? 'open' : 'close'}
			variants={variants}
		>
			<motion.div className={styles.sidebarContent}>{children}</motion.div>
		</motion.aside>
	)
}
