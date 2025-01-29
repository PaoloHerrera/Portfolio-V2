import { motion } from 'motion/react'
import { leftVariants as variants } from '@/variants.js'

export const NavbarBrand = ({ item }) => {
	return (
		<motion.div variants={variants} initial="initial" animate="animate">
			<a href={item.link}>
				<span className="font-bold text-2xl">{item.name}</span>
				<span className="text-secondary font-bold text-2xl">{item.last}</span>
			</a>
		</motion.div>
	)
}
