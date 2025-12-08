import { createContext, useEffect, useReducer } from "react"

import appReducer from "./../reducers/appReducer.js"

export const AppContext = createContext()

export const AppProvider = (props) => {
    const savedTheme = localStorage.getItem('theme') || 'dark'

    const appInitialState = {
        theme: savedTheme,
        color: savedTheme === 'dark' ? {
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
        },
    }

    const [state, dispatch] = useReducer(appReducer, appInitialState)

    useEffect(() => {
        localStorage.setItem('theme', state.theme)
    }, [state.theme])

    return (
        <AppContext.Provider value={{ state: state, dispatch: dispatch }}>
            {props.children}
        </AppContext.Provider>
    )
}