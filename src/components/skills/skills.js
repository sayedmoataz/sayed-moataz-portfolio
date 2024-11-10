import React, { useContext } from 'react'
import {
    Box,
    Stack,
    Typography
} from '@mui/material'
import Marquee from "react-fast-marquee"

import Header from './../../utils/header.js'
import { AppContext } from './../../context/context/context.js'
import data from "./../../data/skills.json"
import { assets } from './assets.js'

const Skills = () => {
    const { state } = useContext(AppContext)

    return <Stack>
        <Header color={state.color.light} title='SKILLS' />
        <Box
            width='100%'
            pb={{ xs: 15, md: 20 }}
            alignItems={"center"}
            position="relevant"
        >
            <Box
                width="100%"
                position="absolute"
                zIndex={5}
                left={0}
            >
                <Marquee
                    gradient={false}
                    speed={150}
                    delay={0}
                    play={true}
                    direction="left"
                    pauseOnHover={true}
                >
                    {data.map((skill, index) =>
                        <Stack
                            key={index}
                            direction={{ xs: 'column' }}
                            justifyContent='center'
                            alignItems='center'
                            spacing={{ xs: 1, sm: 2, md: 4 }}
                            sx={{
                                my: 1,
                                bgcolor: 'transparent',
                                borderRadius: "1rem",
                                boxShadow: `0px 0px 5px 1px ${skill.color}`,
                                border: `1px solid ${skill.color}`,
                                width: { xs: '6rem', md: '10rem' },
                                height: { xs: '6rem', md: '10rem' },
                                padding: '0.7rem',
                                mx: 2,
                            }}
                        >
                            <Box
                                component='img'
                                alt={skill.name}
                                src={skill.image ? skill.image : assets[skill.image_name]}
                                loading='eager'
                                sx={{
                                    maxWidth: { xs: '4rem', md: '8rem' },
                                    height: { xs: '3rem', md: '4rem' },
                                }}
                            />
                            <Typography
                                variant="span"
                                fontWeight={700}
                                fontFamily='"Noto Sans", sans-serif'
                                fontSize={{ xs: '0.7rem', md: '1.1rem' }}
                                color={skill.color}
                            >
                                {skill.name}
                            </Typography>
                        </Stack>
                    )}
                </Marquee>
            </Box>
        </Box>
    </Stack >
}

export default Skills


/*
    {
        "name": "HTTP",
        "image_name": "",
        "color": "#000000"
    },
    {
        "name": "Dio",
        "image_name": "",
        "color": "#000000"
    },
    {
        "name": "API",
        "image_name": "",
        "color": "#000000"
    },
    {
        "name": "Notification",
        "image_name": "",
        "color": "#000000"
    },
    {
        "name": "Shared Preferences",
        "image_name": "",
        "color": "#000000"
    }
*/