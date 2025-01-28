import { NavbarLink } from './NavbarLink.jsx'

export const NavbarLinks = ({ items }) => {
	return (
		<ul className="lg:gap-10 flex flex-col lg:flex-row gap-5 h-full">
			{items.map((item) => (
				<li key={item.id}>
					<NavbarLink item={item} />
				</li>
			))}
		</ul>
	)
}
