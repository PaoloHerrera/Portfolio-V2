import { useState } from 'react'

const MESSAGE_SUCCESS = 'Mensaje enviado con éxito.'
const MESSAGE_ERROR =
	'Hubo un problema al enviar el mensaje. Por favor, intenta nuevamente.'

export const useSendMail = ({ setFormReady }) => {
	const [successMessage, setSuccessMessage] = useState(null)
	const [errorMessage, setErrorMessage] = useState(null)

	const sendEmail = async (form, provider) => {
		try {
			setFormReady(false)

			const response = await provider(form.current)

			if (response.status === 200) {
				setSuccessMessage(MESSAGE_SUCCESS)
				setErrorMessage(null)
				form.current.reset()
			} else {
				throw new Error(MESSAGE_ERROR)
			}
		} catch (error) {
			setErrorMessage(error.message)
			setSuccessMessage(null)
		} finally {
			setFormReady(true)
		}
	}

	return { sendEmail, errorMessage, successMessage }
}
