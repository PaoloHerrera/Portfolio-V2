import { useMenu } from '@/hooks/useMenu.js'

export const NavbarLink = ({ link, name }) => {
	const { setMenu } = useMenu()

	return (
		<a
			href={link}
			className="flex hover:text-secondary"
			onClick={() => setMenu(false)}
		>
			<span className="font-bold text-lg">{name}</span>
		</a>
	)
}
