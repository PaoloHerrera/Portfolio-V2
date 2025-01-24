import './Navbar.css'
import { NAVBAR_BRAND, NAVBAR_ITEMS } from '../../constants'
import {
	NavbarBrand,
	NavbarLinks,
	ToggleButton,
	CloseButton,
} from './NavbarComponents'
import Sidebar from './Sidebar'
import useMenu from '../hooks/useMenu.js'

export default function Navbar() {
	const { isMenuOpen, setIsMenuOpen } = useMenu()

	return (
		<header>
			<nav className="flex justify-center items-center">
				<div className="nav-list-container flex justify-between items-center">
					<NavbarBrand item={NAVBAR_BRAND} />
					<div className="hidden lg:flex">
						<NavbarLinks items={NAVBAR_ITEMS} />
					</div>
					{!isMenuOpen && <ToggleButton setIsMenuOpen={setIsMenuOpen} />}
					{isMenuOpen && <CloseButton setIsMenuOpen={setIsMenuOpen} />}
					<Sidebar isMenuOpen={isMenuOpen}>
						<NavbarLinks items={NAVBAR_ITEMS} />
					</Sidebar>
				</div>
			</nav>
		</header>
	)
}
