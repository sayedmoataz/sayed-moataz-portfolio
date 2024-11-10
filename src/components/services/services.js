import React, { useContext } from 'react'
import {
    Box,
    Stack,
} from '@mui/material'

import Header from './../../utils/header.js'
import Card from './../../utils/card.js'
import { AppContext } from './../../context/context/context.js'

import data from "./../../data/services.json"
import { assets } from './assets.js'

const Services = () => {
    const { state } = useContext(AppContext)

    return (
        <Box data-aos="fade-up">
            <Header color={state.color.light} title='SERVICES' />
            <Stack
                justifyContent={'center'}
                alignitems={{ xs: 'center', md: 'flex-start' }}
                direction={{ xs: 'column', md: 'row' }}
                flexWrap={'wrap'}
            >
                {data.map((service, index) =>
                    <Box
                        key={index}
                        sx={{
                            width: { xs: "95%", md: "30%" },
                            px: { xs: 1, md: 5 },
                            py: { xs: 2, md: 5 },
                            alignSelf: { xs: 'center', md: 'flex-start' },
                        }}
                    >
                        <Card
                            src={assets[service.image]}
                            color={state.color.light}
                            alt={service.name}
                            headling={service.name}
                            text={service.proposal}
                        />
                    </Box>
                )}
            </Stack>
        </Box>
    )
}

export default Services