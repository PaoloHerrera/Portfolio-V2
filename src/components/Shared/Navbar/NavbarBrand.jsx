import { leftVariants as variants } from '@/variants.js'
import { motion } from 'motion/react'

export const NavbarBrand = ({ item }) => {
	return (
		<motion.div variants={variants} initial="initial" animate="animate">
			<a href={item.link}>
				<span className="font-bold text-2xl text-secondary">{item.name}</span>
			</a>
		</motion.div>
	)
}
