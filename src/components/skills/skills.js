import {
    Box,
    Grid,
    LinearProgress,
    Stack,
    Typography
} from '@mui/material'
import { useContext, useEffect, useRef, useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as SiIcons from 'react-icons/si'

import { AppContext } from './../../context/context/context.js'
import data from "./../../data/skills.json"
import Header from './../../utils/header.js'

const AnimatedProgressBar = ({ skill, delay, state }) => {
    const [progress, setProgress] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const progressRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isVisible) {
                        setIsVisible(true)
                    }
                })
            },
            { threshold: 0.1 }
        )

        if (progressRef.current) {
            observer.observe(progressRef.current)
        }

        return () => {
            if (progressRef.current) {
                observer.unobserve(progressRef.current)
            }
        }
    }, [isVisible])

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                const interval = setInterval(() => {
                    setProgress((prev) => {
                        if (prev >= skill.proficiency) {
                            clearInterval(interval)
                            return skill.proficiency
                        }
                        return prev + 1
                    })
                }, 15)

                return () => clearInterval(interval)
            }, delay)

            return () => clearTimeout(timer)
        }
    }, [isVisible, skill.proficiency, delay])

    const getIcon = (iconName) => {
        const IconComponent = FaIcons[iconName] || SiIcons[iconName]
        return IconComponent ? <IconComponent size={24} /> : null
    }

    return (
        <Stack spacing={1} ref={progressRef}>
            <Stack
                direction="row"
                alignItems="center"
                spacing={1.5}
            >
                <Box
                    sx={{
                        color: skill.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    {getIcon(skill.icon)}
                </Box>
                <Typography
                    variant="body1"
                    fontFamily='"Noto Sans", sans-serif'
                    sx={{
                        color: state.color.light,
                        fontWeight: 600,
                        fontSize: { xs: 14, md: 16 }
                    }}
                >
                    {skill.name}
                </Typography>
                <Typography
                    variant="body2"
                    fontFamily='"Noto Sans", sans-serif'
                    sx={{
                        color: skill.color,
                        fontSize: { xs: 12, md: 14 },
                        ml: 'auto'
                    }}
                >
                    {progress}%
                </Typography>
            </Stack>
            <LinearProgress
                variant="determinate"
                value={progress}
                sx={{
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    '& .MuiLinearProgress-bar': {
                        backgroundColor: skill.color,
                        borderRadius: 4,
                        transition: 'transform 0.4s ease-in-out',
                    }
                }}
            />
        </Stack>
    )
}

const Skills = () => {
    const { state } = useContext(AppContext)

    return <Stack>
        <Header color={state.color.light} title='SKILLS' />
        <Box
            data-aos="fade-up"
            width='100%'
            pb={{ xs: 10, md: 15 }}
            px={{ xs: 2, md: 5 }}
        >
            {data.map((category, categoryIndex) => (
                <Box key={categoryIndex} mb={6}>
                    <Typography
                        variant="h4"
                        gutterBottom
                        fontFamily='"Noto Sans", sans-serif'
                        sx={{
                            color: state.color.secondary,
                            fontWeight: 700,
                            fontSize: { xs: 20, sm: 24, md: 28 },
                            mb: 3,
                            textAlign: 'left'
                        }}
                    >
                        {category.category}
                    </Typography>
                    <Grid container spacing={3}>
                        {category.skills.map((skill, skillIndex) => (
                            <Grid item xs={12} sm={6} md={4} key={skillIndex}>
                                <AnimatedProgressBar
                                    skill={skill}
                                    delay={skillIndex * 100}
                                    state={state}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            ))}
        </Box>
    </Stack>
}

export default Skills