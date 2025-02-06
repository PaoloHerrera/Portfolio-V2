import { motion } from 'motion/react'
import { textVariants as variants } from './variants.js'

export const ContactText = ({ header, description, email, address }) => {
	return (
		<motion.div
			className="flex flex-col gap-10 max-w-[400px] w-full"
			variants={variants}
			initial="initial"
			whileInView="animate"
			viewport={{ once: true }}
		>
			<h3 className="font-bold md:text-4xl text-2xl">{header}</h3>
			<p className="opacity-90 md:text-lg ">{description}</p>
			<span className="font-bold md:text-lg text-secondary">📧 {email}</span>
			<span className="font-bold md:text-lg">
				🌎 {address.city}, {address.country}
			</span>
		</motion.div>
	)
}
