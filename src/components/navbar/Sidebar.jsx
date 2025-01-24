import { clipPath } from 'motion/react-client'
import './Sidebar.css'
import { motion } from 'motion/react'

export default function Sidebar({ children, isMenuOpen }) {
	const variants = {
		open: {
			clipPath: 'circle(200% at right 0)',
			transition: {
				type: 'spring',
				stiffness: 20,
				restDelta: 2,
				damping: 20,
			},
		},
		close: {
			clipPath: 'circle(0% at right 0)',
			transition: {
				delay: 0.3,
				type: 'spring',
				stiffness: 400,
				damping: 40,
			},
		},
	}

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
