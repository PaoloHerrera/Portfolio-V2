import { IconLink } from '@/components/Shared/IconLink/IconLink.jsx'
import { Github } from '@/components/Shared/Icons/Tools/Github.jsx'
import { MailIcon } from '@/components/Shared/Icons/Icons.jsx'

import { useTranslation } from '@/hooks/useTranslation.js'
import { PERSONAL_INFO } from '@/constants/personalInfo.js'

export const Footer = () => {
	const { translate } = useTranslation()

	const name = PERSONAL_INFO.name
	const lastName = PERSONAL_INFO.lastName
	const profession = translate('footer.profession')
	const github = PERSONAL_INFO.github
	const email = PERSONAL_INFO.email
	const year = new Date().getFullYear()
	const legend = translate('footer.legend')

	return (
		<footer className="opacity-90 mt-16 w-full mx-auto mb-10">
			<div className="container mx-auto flex flex-col md:flex-row justify-between items-center max-w-[1200px]">
				<div className="text-center md:text-left mb-4 md:mb-0">
					<p className="text-sm font-bold">
						&copy; {year} {name} {lastName}
					</p>
					<p className="text-sm text-secondary">{profession}</p>
					<p className="text-xs opacity-80">{legend}</p>
				</div>
				<div className="flex gap-4">
					<IconLink href={github}>
						<Github />
					</IconLink>
					<IconLink href={`mailto:${email}`}>
						<MailIcon height="1rem" width="1rem" />
					</IconLink>
				</div>
			</div>
		</footer>
	)
}
