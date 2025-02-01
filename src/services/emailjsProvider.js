import emailjs from '@emailjs/browser'

const EMAIL_JS_CONTANTS = {
	serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
	templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
	publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}

const { serviceId, templateId, publicKey } = EMAIL_JS_CONTANTS

export const sendEmailWhitEmailJs = async (formData) => {
	return await emailjs.sendForm(serviceId, templateId, formData, publicKey)
}
