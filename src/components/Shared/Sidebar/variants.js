export const variants = {
	initial: { clipPath: 'circle(0% at right 0)' },
	open: {
		clipPath: 'circle(200% at right 0)',
		transition: {
			type: 'spring',
			stiffness: 20,
			restDelta: 2,
			damping: 20,
		},
	},
	close: {
		clipPath: 'circle(0% at right 0)',
		transition: {
			delay: 0.3,
			type: 'spring',
			stiffness: 400,
			damping: 40,
		},
	},
}
