import { useContext } from 'react'
import { LangContext } from '@/context/LangContext.js'
import { translations } from '@/i18n/translations.js'

export const useTranslation = () => {
	const { language } = useContext(LangContext)

	// Función para traducir el texto. Recibe el key de la traducción en el objeto de traducciones y devuelve el texto traducido
	const translate = (key) => {
		const keys = key.split('.')
		let value = translations[language]

		for (const k of keys) {
			value = value[k]

			if (!value) {
				break
			}
		}

		return value || translations.en[key]
	}

	return { translate, language }
}
