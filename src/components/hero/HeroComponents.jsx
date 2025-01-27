import './HeroComponents.css'

export function HeroTitle({ children }) {
	return <h1 className="xl:text-6xl text-4xl font-bold">{children}</h1>
}

export function HeroSubtitle({ children }) {
	return (
		<h2 className="text-secondary xl:text-3xl text-xl font-bold">{children}</h2>
	)
}

export function HeroParagraph({ children }) {
	return <p className="xl:text-xl text-lg opacity-80">{children}</p>
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
	return <div className="vertical-color" />
}

export function HeroImage({ image }) {
	return <img src={image.url} alt={image.alt} className="hero-image sm:w-full w-auto sm:h-auto" />
}
