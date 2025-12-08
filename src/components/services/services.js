import {
    Box,
    Stack,
} from '@mui/material'
import { useContext, useState } from 'react'

import { AppContext } from './../../context/context/context.js'
import Card from './../../utils/card.js'
import Header from './../../utils/header.js'
import ServiceModal from './ServiceModal.js'

import data from "./../../data/services.json"
import { assets } from './assets.js'

const Services = () => {
    const { state } = useContext(AppContext)
    const [selectedService, setSelectedService] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)

    const handleServiceClick = (service) => {
        setSelectedService(service)
        setModalOpen(true)
    }

    const handleCloseModal = () => {
        setModalOpen(false)
        setTimeout(() => setSelectedService(null), 300)
    }

    return (
        <Box data-aos="fade-up">
            <Header color={state.color.light} title='SERVICES' />
            <Stack
                justifyContent={'center'}
                alignitems={{ xs: 'center', md: 'flex-start' }}
                direction={{ xs: 'column', md: 'row' }}
                flexWrap={'wrap'}
            >
                {data.map((service, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: { xs: "95%", md: "30%" },
                            px: { xs: 1, md: 5 },
                            py: { xs: 2, md: 5 },
                            alignSelf: { xs: 'center', md: 'flex-start' },
                            cursor: 'pointer',
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-8px)',
                            }
                        }}
                        onClick={() => handleServiceClick(service)}
                    >
                        <Card
                            src={assets[service.image]}
                            color={state.color.light}
                            alt={service.name}
                            headling={service.name}
                            text={service.proposal}
                            clickable={true}
                        />
                    </Box>
                ))}
            </Stack>
            <ServiceModal
                open={modalOpen}
                onClose={handleCloseModal}
                service={selectedService}
                color={state.color.primary}
            />
        </Box>
    )
}

export default Services