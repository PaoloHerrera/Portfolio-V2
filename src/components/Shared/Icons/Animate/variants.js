export const variants = {
	initial: { opacity: 1, scale: 1 },
	animate: {
		opacity: 0,
		scale: 0.9,
		transition: { duration: 2, ease: 'easeInOut' },
	},
}

export const pathVariants = {
	initial: { pathLength: 0 },
	animate: { pathLength: 1, transition: { duration: 2, ease: 'easeInOut' } },
}
