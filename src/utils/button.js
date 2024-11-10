import styled from '@mui/material/styles/styled'
import { Button } from '@mui/material'

export const ColorButton = styled(Button)(() => ({
    color: '#FAFAFA',
    backgroundColor: '#40718D',
    fontWeight: 700,
    width: '100%',
    fontFamily: '"Noto Sans", sans-serif',
    '&:hover': { backgroundColor: '#368F80' },
}))

export const ColorBorderButton = styled(Button)(() => ({
    color: '#40718D',
    borderColor: '#40718D',
    fontWeight: 700,
    fontFamily: '"Noto Sans", sans-serif',
    '&:hover': {
        backgroundColor: '#368F80',
        borderColor: '#368F80',
        color: '#FAFAFA',
    },
}))