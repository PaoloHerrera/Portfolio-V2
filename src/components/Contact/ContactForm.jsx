import { Button } from '@/components/Shared/Button/Button.jsx'
import { Input } from '@/components/Shared/Input/Input.jsx'
import { TextArea } from '@/components/Shared/Input/Input.jsx'
import { ContactIcon } from '@/components/Shared/Icons/Animate/ContactIcon.jsx'
import { ErrorMessage } from '@/components/Shared/FormMessages/ErrorMessage.jsx'
import { SuccessMessage } from '@/components/Shared/FormMessages/SuccessMessage.jsx'

import { motion, useAnimation } from 'motion/react'
import { formVariants as variants } from './variants.js'
import { useState, useRef } from 'react'

import { useSendMail } from '@/hooks/useSendMail.js'
import { sendEmailWhitEmailJs } from '@/services/emailjsProvider.js'

import { validateForm } from './validateForm.js'

export const ContactForm = ({ labels, placeholders, messages }) => {
	/* Form */
	const [formError, setFormError] = useState({})
	const [formReady, setFormReady] = useState(false)

	const form = useRef()

	const { invalidName, invalidEmail, invalidMessage } = messages

	const { sendEmail, successMessage, errorMessage } = useSendMail({
		setFormReady,
		successSendMessage: messages.successSend,
		errorSendMessage: messages.errorSend,
	})

	const sendForm = (e) => {
		e.preventDefault()

		const errors = validateForm(form, invalidName, invalidEmail, invalidMessage)

		if (Object.keys(errors).length > 0) {
			setFormError(errors)
			return
		}

		setFormError({})

		sendEmail(form, sendEmailWhitEmailJs)
	}

	/* Animation */
	const controls = useAnimation()

	const startAnimation = async () => {
		await controls.start('animate')
	}

	return (
		<div className="md:w-1/2 w-full relative">
			<ContactIcon />
			<motion.form
				ref={form}
				onSubmit={sendForm}
				className="flex flex-col gap-8"
				variants={variants}
				initial="initial"
				animate={controls}
				viewport={{ once: true }}
				onAnimationComplete={() => setFormReady(true)}
				onViewportEnter={startAnimation}
				noValidate={true}
				aria-label="Formulario de contacto"
				aria-labelledby="Formulario de contacto"
			>
				<Input
					params={{
						name: 'name',
						label: labels.name,
						type: 'text',
						placeholder: placeholders.name,
						error: formError.name,
					}}
					disabled={!formReady}
				/>
				<Input
					params={{
						name: 'email',
						label: labels.email,
						type: 'email',
						placeholder: placeholders.email,
						error: formError.email,
					}}
				/>
				<TextArea
					params={{
						name: 'message',
						label: labels.message,
						placeholder: placeholders.message,
						error: formError.message,
					}}
					disabled={!formReady}
				/>
				<Button type="submit" variant="secondary" disabled={!formReady}>
					{labels.send}
				</Button>
			</motion.form>
			{successMessage && <SuccessMessage successMessage={successMessage} />}
			{errorMessage && <ErrorMessage errorMessage={errorMessage} />}
		</div>
	)
}
