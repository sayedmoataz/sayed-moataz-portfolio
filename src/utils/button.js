import { Button } from '@mui/material'
import styled from '@mui/material/styles/styled'

export const ColorButton = styled(Button)(() => ({
    color: '#FFFFFF',
    backgroundColor: '#2C5A73',
    fontWeight: 700,
    width: '100%',
    fontFamily: '"Noto Sans", sans-serif',
    '&:hover': { backgroundColor: '#368F80' },
}))

export const ColorBorderButton = styled(Button)(() => ({
    color: '#2C5A73',
    borderColor: '#2C5A73',
    fontWeight: 700,
    fontFamily: '"Noto Sans", sans-serif',
    '&:hover': {
        backgroundColor: '#368F80',
        borderColor: '#368F80',
        color: '#FFFFFF',
    },
}))