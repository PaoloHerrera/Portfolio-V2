import { useContext } from 'react'
import { AppContext } from '../context/AppContext.js'

export const useTheme = () => {
	const { theme, setTheme } = useContext(AppContext)

	return { theme, setTheme }
}
