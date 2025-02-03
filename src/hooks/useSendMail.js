import { useState } from 'react'

export const useSendMail = ({
	setFormReady,
	successSendMessage,
	errorSendMessage,
}) => {
	const [successMessage, setSuccessMessage] = useState(null)
	const [errorMessage, setErrorMessage] = useState(null)

	const sendEmail = async (form, provider) => {
		try {
			setFormReady(false)

			const response = await provider(form.current)

			if (response.status === 200) {
				setSuccessMessage(successSendMessage)
				setErrorMessage(null)
				form.current.reset()
			} else {
				throw new Error(errorSendMessage)
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
