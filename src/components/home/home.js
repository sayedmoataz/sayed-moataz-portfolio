import React, { useContext } from 'react'
import {
    Box,
    Stack,
    Typography
} from '@mui/material'

import { AppContext } from './../../context/context/context.js'
import { ColorBorderButton } from './../../utils/button.js'
import CustomButtonBase from '../../utils/buttonbase.js'
import CustomizedMenus from '../../utils/dropdown.js'

import gmailLottie from './../../assets/lotties/gmail.json'
import linkedinLottie from './../../assets/lotties/linkedin.json'
import facebookLottie from './../../assets/lotties/facebook.json'
import githubLottie from './../../assets/lotties/github.json'
import whatsappLottie from './../../assets/lotties/whatsapp.json'
import stackOverflowLottie from './../../assets/lotties/stack_overflow.json'
import data from '../../data/portfolio.json'
import img from '../../assets/sayed.png'

const Home = () => {
    const { state } = useContext(AppContext)

    return <Stack
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
                    variant="h2"
                    gutterBottom
                    fontFamily='"Noto Sans", sans-serif'
                    letterSpacing={1.5}
                    sx={{
                        color: state.color.secondary,
                        fontWeight: 700,
                        fontSize: { xs: 24, sm: 28, md: 32, lg: 36 },
                    }}
                >
                    {data.title}
                </Typography>
                <Typography
                    variant="h1"
                    gutterBottom
                    fontFamily='"Noto Sans", sans-serif'
                    letterSpacing={1.5}
                    sx={{
                        color: state.color.light,
                        fontWeight: 900,
                        fontSize: { xs: 24, sm: 36, md: 44, lg: 50 },
                    }}
                >
                    {data.name}
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
                alignItems: { xs: 'center', md: "flex-start" }
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
                }} />
        </Box>
    </Stack>
}

export default Home
