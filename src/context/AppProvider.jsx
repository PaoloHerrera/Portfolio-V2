import { AppContext } from './AppContext.js'
import { useAppReducer } from '../hooks/useAppReducer.js'

// Crear el proveedor
export const AppProvider = ({ children }) => {
	const appState = useAppReducer()

	return <AppContext.Provider value={appState}>{children}</AppContext.Provider>
}
