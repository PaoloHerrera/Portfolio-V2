import { useContext } from 'react'
import { AppContext } from '../context/AppContext.js'

export const useTheme = () => {
	const context = useContext(AppContext)

	if (!context) {
		throw new Error('useTheme must be used within AppProvider')
	}

	const { theme, setTheme } = context

	return { theme, setTheme }
}
