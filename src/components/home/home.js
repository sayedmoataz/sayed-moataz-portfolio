import {
    Box,
    Stack,
    Typography
} from '@mui/material'
import { useContext } from 'react'

import CustomButtonBase from '../../utils/buttonbase.js'
import CustomizedMenus from '../../utils/dropdown.js'
import { AppContext } from './../../context/context/context.js'
import { ColorBorderButton } from './../../utils/button.js'

import img from '../../assets/sayed.png'
import data from '../../data/portfolio.json'
import facebookLottie from './../../assets/lotties/facebook.json'
import githubLottie from './../../assets/lotties/github.json'
import gmailLottie from './../../assets/lotties/gmail.json'
import linkedinLottie from './../../assets/lotties/linkedin.json'
import mediumLottie from './../../assets/lotties/medium.json'
import stackOverflowLottie from './../../assets/lotties/stack_overflow.json'
import whatsappLottie from './../../assets/lotties/whatsapp.json'

const Home = () => {
    const { state } = useContext(AppContext)

    return <>
        <Stack
            data-aos="fade-up"
            direction={{ xs: 'column-reverse', md: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            justifyContent="space-between"
            alignItems="center"
        >
            <Stack
                direction={{ xs: 'column' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                justifyContent="space-evenly"
                sx={{
                    width: { xs: "80%", md: "40%" },
                    alignItems: { xs: 'center', md: "flex-start" }
                }}
            >
                <Stack>
                    <Typography
                        variant="h1"
                        gutterBottom
                        fontFamily='"Noto Sans", sans-serif'
                        letterSpacing={1.5}
                        sx={{
                            color: state.color.light,
                            fontWeight: 900,
                            fontSize: { xs: 32, sm: 44, md: 52, lg: 60 },
                        }}
                    >
                        {data.name}
                    </Typography>
                    <Typography
                        variant="h2"
                        gutterBottom
                        fontFamily='"Noto Sans", sans-serif'
                        letterSpacing={1.5}
                        sx={{
                            color: state.color.secondary,
                            fontWeight: 700,
                            fontSize: { xs: 20, sm: 24, md: 28, lg: 32 },
                        }}
                    >
                        {data.title}
                    </Typography>
                </Stack>
                <Stack
                    direction={{ xs: 'row' }}
                    spacing={{ xs: 1 }}
                    justifyContent="flex-start"
                    alignItems='flex-start'
                    sx={{
                        width: { xs: '95%', sm: '85%', xl: '75%' },
                        py: "2%"
                    }}
                >
                    <CustomButtonBase
                        href={data.gmail.url}
                        animationData={gmailLottie}
                        title={data.gmail.title}
                    />
                    <CustomButtonBase
                        href={data.github.url}
                        animationData={githubLottie}
                        title={data.github.title}
                    />
                    <CustomButtonBase
                        href={data.stack_overFlow.url}
                        animationData={stackOverflowLottie}
                        title={data.stack_overFlow.title}
                    />
                    <CustomButtonBase
                        href={data.linkedin.url}
                        animationData={linkedinLottie}
                        title={data.linkedin.title}
                    />
                    <CustomButtonBase
                        href={data.facebook.url}
                        animationData={facebookLottie}
                        title={data.facebook.title}
                    />
                    <CustomButtonBase
                        href={data.whatsapp.url}
                        animationData={whatsappLottie}
                        title={data.whatsapp.title}
                    />
                    <CustomButtonBase
                        href={data.medium.url}
                        animationData={mediumLottie}
                        title={data.medium.title}
                    />
                </Stack>
                <Stack
                    sx={{ py: "2%" }}
                    direction={{ xs: 'row' }}
                    spacing={{ xs: 3, sm: 5, md: 7 }}
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <CustomizedMenus />
                    <ColorBorderButton
                        variant="outlined"
                        size="large"
                        href='#Contact'
                    >Contact</ColorBorderButton>
                </Stack>
            </Stack>
            <Box
                sx={{
                    width: { xs: "80%", md: "40%" },
                    padding: "5%",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        width: { xs: 280, sm: 320, md: 380, lg: 420 },
                        height: { xs: 280, sm: 320, md: 380, lg: 420 },
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: -10,
                            left: -10,
                            right: -10,
                            bottom: -10,
                            borderRadius: '50%',
                            background: `linear-gradient(45deg, ${state.color.secondary}, ${state.color.teal}, ${state.color.primary})`,
                            animation: 'rotate 3s linear infinite',
                            zIndex: -1,
                        },
                        '@keyframes rotate': {
                            '0%': {
                                transform: 'rotate(0deg)',
                            },
                            '100%': {
                                transform: 'rotate(360deg)',
                            },
                        },
                    }}
                >
                    <Box
                        component='img'
                        alt="Sayed Moataz"
                        src={img}
                        loading='eager'
                        sx={{
                            width: "100%",
                            height: "100%",
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: `5px solid ${state.color.dark}`,
                            boxShadow: `0 0 30px ${state.color.secondary}`,
                            transition: 'all 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'scale(1.05)',
                                boxShadow: `0 0 50px ${state.color.teal}`,
                            }
                        }}
                    />
                </Box>
            </Box>
        </Stack>
    </>
}

export default Home
