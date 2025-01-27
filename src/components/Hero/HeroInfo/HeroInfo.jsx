import { HeroTitle } from './HeroTitle.jsx'
import { HeroSubtitle } from './HeroSubtitle.jsx'
import { HeroParagraph } from './HeroParagraph.jsx'
import { IconLink } from '@/components/Shared/IconLink/IconLink.jsx'
import { GithubIcon, MailIcon } from '@/components/Shared/Icons/Icons.jsx'
import { ButtonLink } from '@/components/Shared/Button/Button.jsx'
import styles from './HeroInfo.module.css'

export const HeroInfo = ({ PROFESSIONAL_INFORMATION }) => {
	return (
		<article className={styles.heroInfo}>
			<HeroTitle>
				{PROFESSIONAL_INFORMATION.name} {PROFESSIONAL_INFORMATION.lastName}
			</HeroTitle>
			<HeroSubtitle>{PROFESSIONAL_INFORMATION.profession}</HeroSubtitle>
			<HeroParagraph>{PROFESSIONAL_INFORMATION.presentation}</HeroParagraph>
			<div className={styles.heroLinks}>
				<IconLink link={PROFESSIONAL_INFORMATION.github}>
					<GithubIcon />
				</IconLink>
				<IconLink link={`mailto:${PROFESSIONAL_INFORMATION.email}`}>
					<MailIcon />
				</IconLink>
				<ButtonLink href={PROFESSIONAL_INFORMATION.cv.link} isDownload={true}>
					{PROFESSIONAL_INFORMATION.cv.name}
				</ButtonLink>
			</div>
		</article>
	)
}
