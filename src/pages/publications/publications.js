import {
    Box,
    Card,
    CardContent,
    Grid,
    IconButton,
    Stack,
    Typography
} from '@mui/material'
import { useContext } from 'react'
import * as FaIcons from 'react-icons/fa'
import { FaExternalLinkAlt } from 'react-icons/fa'
import * as SiIcons from 'react-icons/si'

import { AppContext } from '../../context/context/context.js'
import publicationsData from '../../data/publications.json'
import Header from '../../utils/header.js'

const Publications = () => {
    const { state } = useContext(AppContext)

    const getIcon = (iconName) => {
        const IconComponent = FaIcons[iconName] || SiIcons[iconName]
        return IconComponent ? <IconComponent size={48} /> : null
    }

    return (
        <Box
            id="Publications"
            sx={{
                width: '100%',
                pt: { xs: 12, md: 15 },
                pb: { xs: 5, md: 10 },
                px: { xs: 2, md: 5 }
            }}
        >
            <Header color={state.color.light} title='PUBLICATIONS & CONTRIBUTIONS' />

            <Typography
                variant="body1"
                textAlign="center"
                fontFamily='"Noto Sans", sans-serif'
                sx={{
                    color: state.color.light,
                    opacity: 0.8,
                    mb: 6,
                    maxWidth: 800,
                    mx: 'auto',
                    fontSize: { xs: 14, md: 16 }
                }}
            >
                Sharing knowledge and contributing to the developer community across multiple platforms
            </Typography>

            <Grid container spacing={4} data-aos="fade-up">
                {publicationsData.platforms.map((platform, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            component="a"
                            href={platform.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                height: '100%',
                                bgcolor: 'transparent',
                                border: `2px solid ${state.color.primary}`,
                                boxShadow: `0px 0px 10px 1px ${state.color.primary}`,
                                borderRadius: 3,
                                textDecoration: 'none',
                                transition: 'all 0.3s ease-in-out',
                                cursor: 'pointer',
                                position: 'relative',
                                overflow: 'hidden',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    border: `2px solid ${platform.color}`,
                                    boxShadow: `0px 0px 20px 3px ${platform.color}`,
                                    '& .platform-icon': {
                                        transform: 'scale(1.1) rotate(5deg)',
                                        color: platform.color
                                    },
                                    '& .external-link': {
                                        opacity: 1,
                                        transform: 'translate(0, 0)'
                                    }
                                }
                            }}
                        >
                            {/* External Link Icon */}
                            <IconButton
                                className="external-link"
                                sx={{
                                    position: 'absolute',
                                    top: 12,
                                    right: 12,
                                    color: state.color.secondary,
                                    opacity: 0,
                                    transform: 'translate(10px, -10px)',
                                    transition: 'all 0.3s ease-in-out',
                                    zIndex: 2
                                }}
                            >
                                <FaExternalLinkAlt size={16} />
                            </IconButton>

                            <CardContent sx={{ p: 3, height: '100%' }}>
                                <Stack spacing={2} height="100%">
                                    {/* Icon */}
                                    <Box
                                        className="platform-icon"
                                        sx={{
                                            color: state.color.secondary,
                                            transition: 'all 0.3s ease-in-out',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: 64,
                                            height: 64,
                                            borderRadius: 2,
                                            bgcolor: `${platform.color}15`,
                                            mb: 1
                                        }}
                                    >
                                        {getIcon(platform.icon)}
                                    </Box>

                                    {/* Title */}
                                    <Typography
                                        variant="h5"
                                        fontFamily='"Noto Sans", sans-serif'
                                        fontWeight={700}
                                        sx={{
                                            color: state.color.light,
                                            fontSize: { xs: 20, md: 24 }
                                        }}
                                    >
                                        {platform.name}
                                    </Typography>

                                    {/* Subtitle */}
                                    <Typography
                                        variant="subtitle1"
                                        fontFamily='"Noto Sans", sans-serif'
                                        sx={{
                                            color: state.color.secondary,
                                            fontSize: { xs: 14, md: 16 },
                                            fontWeight: 600
                                        }}
                                    >
                                        {platform.title}
                                    </Typography>

                                    {/* Description */}
                                    <Typography
                                        variant="body2"
                                        fontFamily='"Noto Sans", sans-serif'
                                        sx={{
                                            color: state.color.light,
                                            opacity: 0.8,
                                            fontSize: { xs: 13, md: 14 },
                                            lineHeight: 1.6,
                                            flex: 1
                                        }}
                                    >
                                        {platform.description}
                                    </Typography>

                                    {/* Stats */}
                                    <Box
                                        sx={{
                                            mt: 'auto',
                                            pt: 2,
                                            borderTop: `1px solid ${state.color.primary}`
                                        }}
                                    >
                                        <Stack direction="row" spacing={1} alignItems="baseline">
                                            <Typography
                                                variant="h6"
                                                fontFamily='"Noto Sans", sans-serif'
                                                fontWeight={700}
                                                sx={{
                                                    color: platform.color,
                                                    fontSize: { xs: 24, md: 28 }
                                                }}
                                            >
                                                {platform.stats.value}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                fontFamily='"Noto Sans", sans-serif'
                                                sx={{
                                                    color: state.color.light,
                                                    opacity: 0.7,
                                                    fontSize: { xs: 12, md: 14 }
                                                }}
                                            >
                                                {platform.stats.label}
                                            </Typography>
                                        </Stack>
                                    </Box>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default Publications
