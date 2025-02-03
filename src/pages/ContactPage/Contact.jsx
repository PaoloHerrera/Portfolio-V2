import { PageTitle } from '@/pages/PageTitle.jsx'
import { ContactText } from '@/components/Contact/ContactText.jsx'
import { ContactForm } from '@/components/Contact/ContactForm.jsx'
import { useTranslation } from '@/hooks/useTranslation.js'

export const Contact = () => {
	const { translate } = useTranslation()

	const title = translate('contact.title')

	const info = translate('contact.info')

	const { header, description, email, city, country } = info

	const { labels, placeholders, messages } = info

	return (
		<section id="contact" className="mb-10">
			<PageTitle title={title} />

			<article className="flex flex-col items-center md:flex-row gap-14 mt-20 justify-between">
				<ContactText
					header={header}
					description={description}
					email={email}
					address={{ city, country }}
				/>

				<ContactForm
					labels={labels}
					placeholders={placeholders}
					messages={messages}
				/>
			</article>
		</section>
	)
}
