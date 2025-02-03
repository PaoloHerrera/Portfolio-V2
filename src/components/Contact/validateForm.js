const nameRegex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const validateForm = (
	form,
	invalidName,
	invalidEmail,
	invalidMessage,
) => {
	const errors = {}
	const formName = form.current.name.value
	const formEmail = form.current.email.value
	const formMessage = form.current.message.value

	if (formName.trim() === '' || !nameRegex.test(formName)) {
		errors.name = invalidName
	}

	if (formEmail.trim() === '' || !emailRegex.test(formEmail)) {
		errors.email = invalidEmail
	}

	if (formMessage.trim() === '') {
		errors.message = invalidMessage
	}

	return errors
}
