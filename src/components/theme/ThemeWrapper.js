import { Box } from '@mui/material'
import { useContext } from 'react'
import { AppContext } from '../../context/context/context.js'

const ThemeWrapper = ({ children }) => {
    const { state } = useContext(AppContext)

    return (
        <Box
            sx={{
                minHeight: '100vh',
                bgcolor: state.color.background,
                transition: 'background-color 0.3s ease-in-out'
            }}
        >
            {children}
        </Box>
    )
}

export default ThemeWrapper
