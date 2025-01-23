import { MenuIcon, CloseIcon } from '../../assets/Icons'
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
		<ul className="gap-10 flex flex-col lg:flex-row">
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

export function ToggleButton({ setIsMenuOpen }) {
	return (
		<>
			<button
				type="button"
				className="toggle-button flex lg:hidden"
				onClick={() => {
					setIsMenuOpen(true)
				}}
			>
				<MenuIcon />
			</button>
		</>
	)
}

export function CloseButton({ setIsMenuOpen }) {
	return (
		<button
			type="button"
			className="close-button flex lg:hidden"
			onClick={() => {
				setIsMenuOpen(false)
			}}
		>
			<CloseIcon />
		</button>
	)
}
