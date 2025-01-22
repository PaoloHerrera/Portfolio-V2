import './NavbarComponents.css'

function NavbarLink({ item }) {
	return (
		<a href={item.link} className="navbar-link">
			<span className="font-bold text-lg">{item.name}</span>
		</a>
	)
}

export function NavbarLinks({ items }) {
	return (
		<ul className="flex gap-10">
			{items.map((item) => (
				<li key={item.id}>
					<NavbarLink item={item} />
				</li>
			))}
		</ul>
	)
}

export function NavbarBrand({ item }) {
	return (
		<a href={item.link}>
			<span className="font-bold text-2xl">{item.name}</span>
			<span className="text-secondary font-bold text-2xl">{item.last}</span>
		</a>
	)
}
