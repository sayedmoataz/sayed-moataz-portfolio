import {
    Box,
    Chip,
    Grid,
    Stack,
    Typography
} from '@mui/material'
import { useContext } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as SiIcons from 'react-icons/si'

import { AppContext } from './../../context/context/context.js'
import data from "./../../data/skills.json"
import Header from './../../utils/header.js'

const SkillItem = ({ skill }) => {
    const getIcon = (iconName) => {
        const IconComponent = FaIcons[iconName] || SiIcons[iconName]
        return IconComponent ? <IconComponent size={24} /> : null
    }

    return (
        <Stack
            direction="row"
            alignItems="center"
            spacing={1.5}
            sx={{
                p: 2,
                borderRadius: 2,
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s ease',
                '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-2px)',
                }
            }}
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
                    color: '#FFFFFF',
                    fontWeight: 600,
                    fontSize: { xs: 14, md: 16 }
                }}
            >
                {skill.name}
            </Typography>
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
                <Box key={categoryIndex} mb={8}>
                    {/* Category Title */}
                    <Typography
                        variant="h3"
                        gutterBottom
                        fontFamily='"Noto Sans", sans-serif'
                        sx={{
                            color: state.color.secondary,
                            fontWeight: 700,
                            fontSize: { xs: 22, sm: 26, md: 32 },
                            mb: 4,
                            textAlign: 'left',
                            position: 'relative',
                            display: 'inline-block',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                bottom: -8,
                                left: 0,
                                width: '60px',
                                height: '4px',
                                backgroundColor: state.color.primary,
                                borderRadius: '2px'
                            }
                        }}
                    >
                        {category.category}
                    </Typography>

                    {/* Check if category has subcategories */}
                    {category.subcategories ? (
                        // Render subcategories
                        <Box mt={4}>
                            {category.subcategories.map((subcategory, subIndex) => (
                                <Box key={subIndex} mb={5}>
                                    {/* Subcategory Badge */}
                                    <Chip
                                        label={subcategory.name}
                                        sx={{
                                            mb: 3,
                                            bgcolor: `${state.color.primary}20`,
                                            color: state.color.light,
                                            border: `1px solid ${state.color.primary}`,
                                            fontFamily: '"Noto Sans", sans-serif',
                                            fontWeight: 600,
                                            fontSize: { xs: 13, md: 15 },
                                            px: 1,
                                            py: 2.5,
                                            '&:hover': {
                                                bgcolor: `${state.color.primary}30`,
                                            }
                                        }}
                                    />

                                    {/* Skills Grid */}
                                    <Grid container spacing={3}>
                                        {subcategory.skills.map((skill, skillIndex) => (
                                            <Grid item xs={12} sm={6} md={4} key={skillIndex}>
                                                <SkillItem skill={skill} />
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                            ))}
                        </Box>
                    ) : (
                        // Render skills directly if no subcategories
                        <Grid container spacing={3} mt={2}>
                            {category.skills.map((skill, skillIndex) => (
                                <Grid item xs={12} sm={6} md={4} key={skillIndex}>
                                    <SkillItem skill={skill} />
                                </Grid>
                            ))}
                        </Grid>
                    )}
                </Box>
            ))}
        </Box>
    </Stack>
}

export default Skills