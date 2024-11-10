import React, { useContext } from 'react'
import {
    Stack,
    Box,
    Typography,
} from '@mui/material'
import Lottie from 'react-lottie'

import { AppContext } from './../../context/context/context.js'
import Header from './../../utils/header.js'
import aboutLottie from "./../../assets/lotties/about.json"
import data from '../../data/about.json'

const About = () => {
    const { state } = useContext(AppContext)

    return <Box data-aos="fade-up">
        <Header color={state.color.light} title='ABOUT ME' />
        <Stack
            data-aos="fade-up"
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            justifyContent="space-around"
            alignItems="center"
        >
            <Box sx={{ width: { xs: "70%", md: "30%" }, }}>
                <Lottie
                    options={{
                        loop: true,
                        autoplay: true,
                        animationData: aboutLottie,
                        rendererSettings: {
                            preserveAspectRatio: "xMidYMid slice",
                        },
                    }}
                />
            </Box>
            <Box
                sx={{
                    width: { xs: "95%", md: "45%" },
                    alignItems: { xs: 'center', md: "flex-start" }
                }}
            >
                <Typography
                    fontFamily='"Noto Sans", sans-serif'
                    lineHeight={1.6}
                    letterSpacing={1.3}
                    fontSize={{ xs: "0.9rem", md: "1rem" }}
                    sx={{
                        color: state.color.light,
                        py: { md: "3%" }
                    }}>
                    {data.data}
                </Typography>
            </Box>
        </Stack >
    </Box >
}

export default About