import { LangContext } from './LangContext.js'

import { useState } from 'react'

// Crear un nuevo proveedor para el idioma
export const LangProvider = ({ children }) => {
	const [language, setLanguage] = useState('es')

	return (
		<LangContext.Provider value={{ language, setLanguage }}>
			{children}
		</LangContext.Provider>
	)
}
