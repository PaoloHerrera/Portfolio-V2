export const ERROR_MESSAGES = {
	name: 'Por favor ingresa un nombre válido',
	email: 'Por favor ingresa un correo válido',
	message: 'Por favor ingresa tu mensaje',
}

const nameRegex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const validateForm = (form) => {
	const errors = {}
	const formName = form.current.name.value
	const formEmail = form.current.email.value
	const formMessage = form.current.message.value

	if (formName.trim() === '' || !nameRegex.test(formName)) {
		errors.name = ERROR_MESSAGES.name
	}

	if (formEmail.trim() === '' || !emailRegex.test(formEmail)) {
		errors.email = ERROR_MESSAGES.email
	}

	if (formMessage.trim() === '') {
		errors.message = ERROR_MESSAGES.message
	}

	return errors
}
