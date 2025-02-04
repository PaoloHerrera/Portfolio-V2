import { PageTitle } from '@/pages/PageTitle.jsx'
import { AboutEs } from './AboutEs.jsx'
import { AboutEn } from './AboutEn.jsx'
import { ABOUT_ME } from '@/constants/about.js'
import { motion } from 'motion/react'

import { useTranslation } from '@/hooks/useTranslation.js'

export const About = () => {
	const { translate, language } = useTranslation()

	const title = translate('about.title')

	return (
		<section id="about">
			<PageTitle title={title} />

			<div className="flex flex-col-reverse md:flex-row items-center gap-14 mt-20 justify-between">
				<motion.article
					className="flex flex-col items-center gap-14 justify-between md:w-1/2 w-full"
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, ease: 'easeInOut' }}
				>
					{language === 'es' ? <AboutEs /> : <></>}
					{language === 'en' ? <AboutEn /> : <></>}
				</motion.article>
				<motion.div
					className="aspect-2/3 flex justify-center"
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, ease: 'easeInOut' }}
				>
					<img
						src={ABOUT_ME.img}
						alt={translate('about.alt')}
						className="w-56 object-cover aspect-square rounded-lg md:w-72"
						loading="lazy"
					/>
				</motion.div>
			</div>
		</section>
	)
}
