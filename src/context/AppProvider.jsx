import { useAppReducer } from '../hooks/useAppReducer.js'
import { AppContext } from './AppContext.js'

// Crear el proveedor
export const AppProvider = ({ children }) => {
	const appState = useAppReducer()

	return <AppContext.Provider value={appState}>{children}</AppContext.Provider>
}
