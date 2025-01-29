import { Button } from '@/components/Shared/Button/Button.jsx'
import { Input } from '@/components/Shared/Input/Input.jsx'
import { TextArea } from '@/components/Shared/Input/Input.jsx'
import { ContactIcon } from '@/components/Shared/Icons/Animate/ContactIcon.jsx'
import { motion } from 'motion/react'
import { formVariants as variants } from './variants.js'

export const ContactForm = ({ labels, placeholders }) => {
	return (
		<div className="md:w-1/2 w-full relative">
			<ContactIcon />
			<motion.form
				action=""
				className="flex flex-col gap-8"
				variants={variants}
				initial="initial"
				whileInView="animate"
				viewport={{ once: true }}
			>
				<Input type="text" name={labels.name} placeholder={placeholders.name} />
				<Input
					type="email"
					name={labels.email}
					placeholder={placeholders.email}
				/>
				<TextArea name={labels.message} placeholder={placeholders.message} />
				<Button type="submit" variant="secondary">
					Enviar
				</Button>
			</motion.form>
		</div>
	)
}
