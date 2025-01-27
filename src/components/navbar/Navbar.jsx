import './Navbar.css'
import { NAVBAR_BRAND, NAVBAR_ITEMS } from '../../constants'
import {
	NavbarBrand,
	NavbarLinks,
	ToggleButton,
	CloseButton,
} from './NavbarComponents'
import Sidebar from './sidebar/Sidebar'
import useMenu from '../hooks/useMenu.js'

export default function Navbar() {
	const { isMenuOpen, setIsMenuOpen } = useMenu()

	return (
		<header>
			<nav className="navbar">
				<div className="nav-list-container">
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
