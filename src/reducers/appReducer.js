export const initialState = {
	theme: localStorage.getItem('theme') || 'dark',
	lang: localStorage.getItem('lang') || 'es',
}

export const appReducer = (state, action) => {
	switch (action.type) {
		case 'SET_THEME':
			return {
				...state,
				theme: action.payload,
			}
		case 'SET_LANG':
			return {
				...state,
				lang: action.payload,
			}
		default:
			return state
	}
}
