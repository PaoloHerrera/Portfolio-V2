import { PageTitle } from '@/pages/PageTitle.jsx'
import { CONTACTME } from '@/constants.js'
import { ContactText } from '@/components/Contact/ContactText.jsx'
import { ContactForm } from '@/components/Contact/ContactForm.jsx'

export const Contact = ({ title }) => {
	const { header, description, email, address } = CONTACTME
	const { labels, placeholders } = CONTACTME

	return (
		<section id="contact" className="mb-10">
			<PageTitle title={title} />

			<article className="flex flex-col items-center md:flex-row gap-14 mt-20 justify-between">
				<ContactText
					header={header}
					description={description}
					email={email}
					address={address}
				/>

				<ContactForm labels={labels} placeholders={placeholders} />
			</article>
		</section>
	)
}
