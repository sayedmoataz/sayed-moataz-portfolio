
const appReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            const newTheme = state.theme === 'dark' ? 'light' : 'dark'
            return {
                ...state,
                theme: newTheme,
                color: newTheme === 'dark' ? {
                    primary: '#40718D',
                    secondary: '#6286A1',
                    cold: '#A2C6F1',
                    teal: '#368F80',
                    light: '#FAFAFA',
                    dark: '#1E1E1E',
                    background: '#0a0a0a',
                } : {
                    primary: '#40718D',
                    secondary: '#6286A1',
                    cold: '#2563EB',
                    teal: '#368F80',
                    light: '#1E1E1E',
                    dark: '#FAFAFA',
                    background: '#FFFFFF',
                }
            }
        default:
            return state
    }
}

export default appReducer