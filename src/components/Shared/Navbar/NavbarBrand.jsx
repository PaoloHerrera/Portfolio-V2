import { motion } from 'motion/react'

export const NavbarBrand = ({ item, variants }) => {
	return (
		<motion.div variants={variants} initial="initial" animate="animate">
			<a href={item.link}>
				<span className="font-bold text-2xl">{item.name}</span>
				<span className="text-secondary font-bold text-2xl">{item.last}</span>
			</a>
		</motion.div>
	)
}
