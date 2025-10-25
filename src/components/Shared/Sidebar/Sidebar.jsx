import { motion } from 'motion/react'
import { variants } from './variants.js'

export const Sidebar = ({ children, isMenuOpen }) => {
	return (
		<motion.aside
			className="flex fixed w-full h-screen justify-end top-0 right-0 bg-nav-input-dark light:bg-nav-input-light text-text-dark light:text-text-light pt-20 pr-6"
			initial="initial"
			animate={isMenuOpen ? 'open' : 'close'}
			variants={variants}
		>
			<motion.div>{children}</motion.div>
		</motion.aside>
	)
}
