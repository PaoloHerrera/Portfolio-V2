import { useState, useEffect } from 'react'

export default function useMenu() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	// Deshabilita el scroll cuando el menu esta abierto
	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
	}, [isMenuOpen])

	// Cerrar el menu al redimensionar la ventana
	useEffect(() => {
		const handleResize = () => {
			setIsMenuOpen(false)
		}
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	})

	// Cerrar el menu al navegar a otra pagina
	useEffect(() => {
		const changeURL = () => {
			setIsMenuOpen(false)
		}
		window.addEventListener('popstate', changeURL)
		return () => {
			window.removeEventListener('popstate', changeURL)
		}
	})

	return { isMenuOpen, setIsMenuOpen }
}
