import {
    Box,
    Card,
    CardContent,
    Stack,
    Typography
} from '@mui/material'
import { FaHandPointer } from 'react-icons/fa'

const CustomCard = (props) =>
    <Card
        sx={{
            width: "100%",
            alignSelf: 'center',
            border: `1px solid ${props.color}`,
            borderRadius: "1rem",
            bgcolor: 'transparent',
            boxShadow: { xs: '0px 0px 5px 1px #6286A1', md: '0px 0px 10px 1px #6286A1' },
            position: 'relative',
            '&:hover': {
                border: `1px solid #368F80`,
                boxShadow: { xs: '0px 0px 5px 1px #368F80', md: '0px 0px 10px 1px #368F80' },
                transform: props.clickable ? 'scale(1.05)' : 'scale(1.05)',
                transition: 'all 0.3s ease-in-out',
            },
        }}
    >
        {props.clickable && (
            <Box
                sx={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    bgcolor: '#368F80',
                    color: 'white',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    zIndex: 1
                }}
            >
                <FaHandPointer size={12} />
                <Typography variant="caption" fontFamily='"Noto Sans", sans-serif'>
                    Click for details
                </Typography>
            </Box>
        )}
        <CardContent>
            <Stack
                direction={{ xs: 'column' }}
                justifyContent={{ xs: 'center' }}
                alignItems='center'
                spacing={{ xs: 1, md: 3 }}
            >
                <Box
                    component='img'
                    src={props.src}
                    loading='eager'
                    alt={props.alt}
                    sx={{
                        width: { xs: '4rem', md: '5rem' },
                    }}
                />
                <Typography
                    variant="span"
                    fontWeight={900}
                    fontFamily='"Noto Sans", sans-serif'
                    fontSize={{ xs: '1rem', md: '1.1rem' }}
                    color={props.color}
                    textAlign={{ xs: 'center' }}
                    gutterBottom
                >
                    {props.headling}
                </Typography>
                <Typography
                    variant="span"
                    fontWeight={100}
                    fontFamily='"Noto Sans", sans-serif'
                    fontSize={{ xs: '0.8rem', md: '0.9rem' }}
                    color={props.color}
                    textAlign={{ xs: 'center' }}
                    gutterBottom
                >
                    {props.text}
                </Typography>
            </Stack>
        </CardContent>
    </Card>

export default CustomCard