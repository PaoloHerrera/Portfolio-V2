import './Sidebar.css'
import { motion } from 'motion/react'
import { variants } from './variants'

export default function Sidebar({ children, isMenuOpen }) {

	return (
		<motion.aside
			className="sidebar"
			animate={isMenuOpen ? 'open' : 'close'}
			variants={variants}
		>
			<motion.div className="sidebar-content">{children}</motion.div>
		</motion.aside>
	)
}
