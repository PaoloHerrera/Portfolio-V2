export const ButtonLink = ({
	children,
	href,
	variant = 'primary',
	isDownload = false,
}) => {
	const base =
		'cursor-pointer px-4 py-2 rounded-lg transition-transform duration-300 ease-in-out flex gap-2 items-center ml-2 border'
	const primary =
		'bg-transparent text-secondary border-secondary hover:bg-secondary hover:text-[#222] hover:scale-110'
	const secondary = 'bg-secondary text-[#222] border-secondary'
	const variantClasses = variant === 'secondary' ? secondary : primary

	return (
		<a
			href={href}
			download={isDownload}
			target={isDownload ? undefined : '_blank'}
			rel={isDownload ? undefined : 'noopener noreferrer'}
			className={`${base} ${variantClasses}`}
		>
			{children}
		</a>
	)
}

export const Button = ({
	children,
	variant = 'primary',
	type,
	onClick,
	disabled = false,
}) => {
	const base =
		'cursor-pointer px-4 py-2 rounded-lg transition-transform duration-300 ease-in-out border'
	const primary =
		'bg-transparent text-secondary border-secondary hover:bg-secondary hover:text-[#222] hover:scale-110'
	const secondary = 'bg-secondary text-[#222] border-secondary'
	const variantClasses = variant === 'secondary' ? secondary : primary

	return (
		<button
			className={`${base} ${variantClasses}`}
			type={type}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	)
}
