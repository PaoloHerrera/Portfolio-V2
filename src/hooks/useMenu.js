import { useState, useEffect } from 'react'

export const useMenu = () => {
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
		const changeUrl = () => {
			setIsMenuOpen(false)
		}
		window.addEventListener('popstate', changeUrl)
		return () => {
			window.removeEventListener('popstate', changeUrl)
		}
	})

	return { isMenuOpen, setIsMenuOpen }
}
