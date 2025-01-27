import { VerticalColor } from './VerticalColor.jsx'
import styles from './HeroImage.module.css'

export const HeroImage = ({ image }) => {
	return (
		<article
			className={`${styles.heroImageContainer} max-w-[300px] md:max-w-full`}
		>
			<img
				src={image.url}
				alt={image.alt}
				className={`${styles.heroImage} sm:w-full w-auto sm:h-auto`}
			/>
			<VerticalColor style={styles.verticalColor} />
		</article>
	)
}
