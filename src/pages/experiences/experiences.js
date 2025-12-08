import {
    Divider,
    Stack,
    Toolbar,
    Typography,
} from '@mui/material'
import { useContext } from 'react'

import { AppContext } from '../../context/context/context.js'
import data from '../../data/experiences.json'
import Header from '../../utils/header.js'


const ExperienceCard = ({ experience, colors }) => (
    <Stack
        data-aos="fade-up"
        sx={{
            padding: 3,
            border: `1px solid ${colors.primary}`,
            boxShadow: `0px 0px 5px 1px ${colors.primary}`,
            borderRadius: 5,
            mb: 4,
            "&:hover": {
                border: `1px solid ${colors.teal}`,
                boxShadow: `0px 0px 5px 2px ${colors.teal}`,
                transition: 'all 0.3s ease-in-out',
            }
        }}
    >
        <Typography
            variant="h5"
            gutterBottom
            fontFamily='"Noto Sans", sans-serif'
            fontWeight="bold"
            fontSize={{ xs: 20, md: 28 }}
            letterSpacing={1.1}
            sx={{ color: colors.light }}
        >
            {experience.job_title}
        </Typography>
        <Typography
            component={experience.company_website ? 'a' : 'span'}
            href={experience.company_website}
            target="_blank"
            variant="p"
            width={'fit-content'}
            fontFamily='"Noto Sans", sans-serif'
            fontSize={{ xs: 18, md: 22 }}
            sx={{
                cursor: experience.company_website ? 'pointer' : 'default',
                textDecoration: 'none',
                "&:hover": experience.company_website ? { color: colors.teal } : {}
            }}
            color={colors.cold}
        >
            {experience.company_name}
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" my={1}>
            <Typography
                variant="span"
                fontFamily='"Noto Sans", sans-serif'
                fontSize={{ xs: 12, md: 14 }}
                color={colors.secondary}
            >
                {experience.employment_type}
            </Typography>
            <Typography
                variant="span"
                fontFamily='"Noto Sans", sans-serif'
                fontSize={{ xs: 12, md: 14 }}
                fontWeight={300}
                color={colors.secondary}
            >
                {experience.start_date} - {experience.end_date}
            </Typography>
            <Typography
                variant="span"
                fontSize={{ xs: 12, md: 14 }}
                fontFamily='"Noto Sans", sans-serif'
                color={colors.primary}
            >
                {experience.location}
            </Typography>
        </Stack>
        <Divider sx={{
            my: 2,
            border: `1px solid ${colors.primary}`
        }} />
        <Typography
            variant="p"
            gutterBottom
            fontFamily='"Noto Sans", sans-serif'
            fontSize={{ xs: 14, md: 16 }}
            lineHeight={1.6}
            color={colors.light}
        >
            {experience.description}
        </Typography>
        {experience.technologies_used.length > 0 && (
            <>
                <Typography
                    variant="h6"
                    mt={2}
                    fontFamily='"Noto Sans", sans-serif'
                    fontWeight={100}
                    fontSize={{ xs: 12, md: 14 }}
                    color={colors.light}
                >
                    Skills Earned
                </Typography>
                <Stack
                    direction="row"
                    my={2}
                    flexWrap="wrap"
                >
                    {experience.technologies_used.map((tech, index) => (
                        <Typography
                            key={index}
                            fontSize={{ xs: 11, md: 14 }}
                            color={colors.light}
                            sx={{
                                margin: '4px',
                                bgcolor: colors.primary,
                                borderRadius: 5,
                                padding: { xs: "2% 4%", md: "0.5% 2%" },
                                textAlign: 'center'
                            }}
                        >
                            {tech}
                        </Typography>
                    ))}
                </Stack>
            </>
        )}
        {experience.relevant_projects?.length > 0 && (
            <Stack direction="column" my={2} flexWrap="wrap">
                <Typography
                    variant="h6"
                    gutterBottom
                    fontFamily='"Noto Sans", sans-serif'
                    fontWeight={100}
                    fontSize={{ xs: 12, md: 14 }}
                    color={colors.light}
                >
                    Relevant Projects
                </Typography>
                {experience.relevant_projects.map((project, index) => (
                    <Stack key={index} direction="column">
                        <Typography
                            component={'a'}
                            href={project.link}
                            target="_blank"
                            variant="p"
                            width={'fit-content'}
                            fontFamily='"Noto Sans", sans-serif'
                            fontSize={{ xs: 14, md: 16 }}
                            sx={{
                                cursor: 'pointer',
                                textDecoration: 'none',
                                "&:hover": { color: colors.teal }
                            }}
                            color={colors.cold}
                        >
                            {project.project_title}
                        </Typography>
                        <Typography
                            color={colors.light}
                            fontSize={{ xs: 14, md: 16 }}
                            padding={{ xs: "2% 4%", md: "1% 3%" }}
                        >
                            {project.project_description}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        )}
    </Stack>
)

const Experiences = () => {
    const { state } = useContext(AppContext)

    return (
        <Stack
            id="Experiences"
            direction='column'
            justifyContent="flex-start"
            alignItems="flex-start"
        >
            <Toolbar />
            <Toolbar />
            <Header color={state.color.light} title='EXPERIENCE' />

            {/* Experience Cards */}
            <Stack
                width="100%"
                px={{ xs: 2, md: 5 }}
                pb={{ xs: 5, md: 10 }}
            >
                {data.data.map((experience, index) => (
                    <ExperienceCard
                        key={index}
                        experience={experience}
                        colors={state.color}
                    />
                ))}
            </Stack>
        </Stack>
    )
}

export default Experiences
