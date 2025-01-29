export const textVariants = {
	initial: { opacity: 0, y: 50, scale: 0.95 },
	animate: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.5, ease: 'easeInOut' },
	},
}

export const formVariants = {
	initial: { opacity: 0, scale: 0.98 },
	animate: {
		opacity: 1,
		scale: 1,
		transition: { delay: 2, duration: 1 },
	},
}
