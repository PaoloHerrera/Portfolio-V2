import { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext.js'

export const useMenu = () => {
	const context = useContext(AppContext)

	if (!context) {
		throw new Error('useMenu must be used within AppProvider')
	}

	const { menu, setMenu } = context

	// Deshabilita el scroll cuando el menu esta abierto
	useEffect(() => {
		if (menu) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
	}, [menu])

	// Cerrar el menu al redimensionar la ventana
	useEffect(() => {
		const handleResize = () => {
			setMenu(false)
		}
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	})

	return { menu, setMenu }
}
