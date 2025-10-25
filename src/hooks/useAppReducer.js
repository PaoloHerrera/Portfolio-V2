import { useReducer } from 'react'
import { appReducer, initialState } from '../reducers/appReducer.js'

import { useEffect } from 'react'

export const useAppReducer = () => {
	const [state, dispatch] = useReducer(appReducer, initialState)

	// Guardar preferencias del usuario en localStorage
	useEffect(() => {
		localStorage.setItem('theme', state.theme)
		localStorage.setItem('lang', state.lang)
		document.documentElement.dataset.theme = state.theme
		const metaTheme = document.querySelector('meta[name="theme-color"]')
		if (metaTheme) {
			metaTheme.setAttribute(
				'content',
				state.theme === 'light' ? '#ffffff' : '#111',
			)
		}
	}, [state.theme, state.lang])

	// Funciones para actualizar el estado
	const setTheme = (theme) => dispatch({ type: 'SET_THEME', payload: theme })
	const setLanguage = (language) =>
		dispatch({ type: 'SET_LANG', payload: language })

	const setMenu = (menu) => dispatch({ type: 'SET_MENU', payload: menu })

	return {
		language: state.lang,
		theme: state.theme,
		menu: state.menu,
		setTheme,
		setLanguage,
		setMenu,
	}
}
