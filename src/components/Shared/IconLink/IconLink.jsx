export const IconLink = ({ href, children, target = '_blank' }) => {
	return (
		<a
			href={href}
			target={target}
			rel={target === '_blank' ? 'noopener noreferrer' : undefined}
			className={
				'text-secondary border border-secondary rounded-full p-2 transition-transform duration-300 ease-in-out hover:bg-secondary hover:text-[#111] cursor-pointer hover:scale-110'
			}
		>
			{children}
		</a>
	)
}
