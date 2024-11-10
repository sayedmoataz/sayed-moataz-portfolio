import {
    Box,
    Stack,
    Typography,
    Card,
    CardContent
} from '@mui/material'

const CustomCard = (props) =>
    <Card
        sx={{
            width: "100%",
            alignSelf: 'center',
            border: `1px solid ${props.color}`,
            borderRadius: "1rem",
            bgcolor: 'transparent',
            boxShadow: { xs: '0px 0px 5px 1px #6286A1', md: '0px 0px 10px 1px #6286A1' },
            '&:hover': {
                border: `1px solid #368F80`,
                boxShadow: { xs: '0px 0px 5px 1px #368F80', md: '0px 0px 10px 1px #368F80' },
                transform: 'scale(1.05)',
                transition: 'all 0.3s ease-in-out',
            },
        }}
    >
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
    </Card >

export default CustomCard