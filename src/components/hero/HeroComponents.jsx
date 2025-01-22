import './HeroComponents.css'

export function HeroTitle({ children }) {
	return <h1 className="text-6xl font-bold">{children}</h1>
}

export function HeroSubtitle({ children }) {
	return <h2 className="text-secondary text-3xl font-bold">{children}</h2>
}

export function HeroParagraph({ children }) {
	return <p className="text-xl">{children}</p>
}

export function HeroLink({ children, link }) {
	return (
		<a href={link} target="_blank" rel="noreferrer" className="hero-link">
			{children}
		</a>
	)
}

export function HeroButton({ children, link }) {
	return (
		<a href={link} className="hero-button" download>
			{children}
		</a>
	)
}

export function VerticalColor() {
	return <div className="w-1/2 -z-50 bg-secondary vertical-color" />
}

export function HeroImage({ image }) {
	return <img src={image.url} alt={image.alt} className="hero-image" />
}
