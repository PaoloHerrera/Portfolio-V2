export const NavbarBrand = ({ item }) => {
	return (
		<a href={item.link}>
			<span className="font-bold text-2xl">{item.name}</span>
			<span className="text-secondary font-bold text-2xl">{item.last}</span>
		</a>
	)
}
