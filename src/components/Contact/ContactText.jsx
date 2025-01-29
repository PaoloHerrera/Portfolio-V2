import { Text } from '@/components/Shared/Text/Text.jsx'
import { motion } from 'motion/react'
import { textVariants as variants } from './variants.js'

export const ContactText = ({ header, description, email, address }) => {
	return (
		<motion.div
			className="max-w-[400px] flex flex-col gap-10"
			variants={variants}
			initial="initial"
			whileInView="animate"
			viewport={{ once: true }}
		>
			<h3 className="font-bold md:text-4xl text-2xl">{header}</h3>
			<Text>{description}</Text>
			<Text variant="secondary">📧 {email}</Text>
			<Text>
				🌎 {address.city}, {address.country}
			</Text>
		</motion.div>
	)
}
