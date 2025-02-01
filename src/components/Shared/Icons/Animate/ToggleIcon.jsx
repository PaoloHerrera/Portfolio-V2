import { motion } from 'motion/react'

export const ToggleIcon = ({ isOpen }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth={2}
			variants={{
				closed: { rotate: 0 },
				open: { rotate: 90 },
			}}
			style={{ zIndex: '1000' }}
		>
			<title>Toggle Menu</title>

			<motion.path
				strokeWidth={3}
				strokeLinecap={'round'}
				variants={{
					closed: { d: 'M 2 2.5 L 20 2.5' },
					open: { d: 'M 3 16.5 L 17 2.5' },
				}}
				initial={isOpen ? 'open' : 'closed'}
				animate={isOpen ? 'open' : 'closed'}
			/>

			<motion.path
				strokeWidth={3}
				strokeLinecap={'round'}
				variants={{
					closed: { opacity: 1, d: 'M 2 9.423 L 20 9.423' },
					open: { opacity: 0 },
				}}
				initial={isOpen ? 'open' : 'closed'}
				animate={isOpen ? 'open' : 'closed'}
			/>

			<motion.path
				strokeWidth={3}
				strokeLinecap={'round'}
				variants={{
					closed: { d: 'M 2 16.346 L 20 16.346' },
					open: { d: 'M 3 2.5 L 17 16.346' },
				}}
				initial={isOpen ? 'open' : 'closed'}
				animate={isOpen ? 'open' : 'closed'}
			/>
		</svg>
	)
}
