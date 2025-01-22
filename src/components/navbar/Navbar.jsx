import './Navbar.css'
import { NAVBAR_BRAND, NAVBAR_ITEMS } from '../../constants'
import { NavbarBrand, NavbarLinks } from './NavbarComponents'

export default function Navbar() {
	return (
		<nav className="flex justify-center items-center">
			<div className="nav-list-container flex justify-between">
				<NavbarBrand item={NAVBAR_BRAND} />
				<NavbarLinks items={NAVBAR_ITEMS} />
			</div>
		</nav>
	)
}
