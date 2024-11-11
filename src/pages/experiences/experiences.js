import React, {
    useContext
} from 'react'
import {
    Divider,
    Stack,
    Toolbar,
    Typography,
} from '@mui/material'

import { AppContext } from '../../context/context/context.js'
import data from '../../data/experiences.json'
import CustomTimeline from '../../utils/timeline'

const Experiences = () => {
    const { state } = useContext(AppContext)

    return <Stack
        id="Experiences"
        direction='column'
        justifyContent="flex-start"
        alignItems="flex-start">
        <Toolbar />
        <Toolbar />
        <Stack
            mt={{ xs: 0, md: 10 }}
            data-aos="fade-up"
            direction={{ xs: 'column' }}
            justifyContent="flex-start"
            alignItems="flex-start">
            {data.data.map((experience, index) => (
                <Stack key={index}>
                    <>
                        <CustomTimeline
                            colors={state.color}
                            jobTitle={experience.job_title}
                            companyName={experience.company_name}
                            companyWebsite={experience.company_website}
                            companyImage={experience.company_image}
                            startDate={experience.start_date}
                            endDate={experience.end_date}
                            description={experience.description}
                            location={experience.location}
                            employmentType={experience.employment_type}
                            technologiesUsed={experience.technologies_used}
                            relevantProjects={experience.relevant_projects}
                        />
                        <Stack
                            mt={4}
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                padding: 3,
                                border: `1px solid ${state.color.primary}`,
                                boxShadow: `0px 0px 5px 1px ${state.color.primary}`,
                                borderRadius: 5,
                                "&:hover": {
                                    border: `1px solid ${state.color.teal}`,
                                    boxShadow: `0px 0px 5px 2px ${state.color.teal}`,
                                    transition: 'all 0.3s ease-in-out',
                                }
                            }}>
                            <Typography
                                variant="h5"
                                gutterBottom
                                fontFamily='"Noto Sans", sans-serif'
                                fontWeight="bold"
                                fontSize={{ xs: 20, md: 30 }}
                                letterSpacing={1.1}
                                sx={{ color: state.color.light }}>
                                {experience.job_title}
                            </Typography>
                            <Typography
                                component={'a'}
                                href={experience.company_website}
                                target="_blank"
                                variant="p"
                                width={'fit-content'}
                                fontFamily='"Noto Sans", sans-serif'
                                fontSize={{ xs: 18, md: 24 }}
                                sx={{
                                    cursor: 'pointer',
                                    textDecoration: 'none',
                                    "&:hover": { color: state.color.teal }
                                }}
                                color={state.color.cold}>
                                {experience.company_name}
                            </Typography>
                            <Typography
                                variant="span"
                                fontFamily='"Noto Sans", sans-serif'
                                fontSize={{ xs: 12, md: 16 }}
                                color={state.color.secondary}>
                                {experience.employment_type}
                            </Typography>
                            <Typography
                                variant="span"
                                fontFamily='"Noto Sans", sans-serif'
                                fontSize={{ xs: 14, md: 16 }}
                                fontWeight={300}
                                color={state.color.secondary}>
                                {experience.start_date} - {experience.end_date}
                            </Typography>
                            <Typography
                                variant="span"
                                fontSize={{ xs: 14, md: 18 }}
                                fontFamily='"Noto Sans", sans-serif'
                                color={state.color.primary}>
                                {experience.location}
                            </Typography>
                            <Divider sx={{
                                my: 2,
                                border: `1px solid ${state.color.primary}`
                            }} />
                            <Typography
                                variant="p"
                                gutterBottom
                                fontFamily='"Noto Sans", sans-serif'
                                fontSize={{ xs: 14, md: 18 }}
                                color={state.color.light}>
                                {experience.description}
                            </Typography>
                            {experience.technologies_used.length > 0 && (
                                <>
                                    <Typography
                                        variant="h6"
                                        mt={2}
                                        fontFamily='"Noto Sans", sans-serif'
                                        fontWeight={100}
                                        fontSize={{ xs: 12, md: 16 }}
                                        color={state.color.light}>
                                        Skills Earned
                                    </Typography>
                                    {experience.technologies_used.length > 0 && (
                                        <Stack
                                            direction="row"
                                            my={2}
                                            flexWrap="wrap">
                                            {experience.technologies_used.map((tech, index) => (
                                                <Typography
                                                    key={index}
                                                    fontSize={{ xs: 11, md: 16 }}
                                                    color={state.color.light}
                                                    sx={{
                                                        margin: '4px',
                                                        bgcolor: state.color.primary,
                                                        borderRadius: 5,
                                                        padding: { xs: "2% 4%", md: "0.5% 2%" },
                                                        textAlign: 'center'
                                                    }}>
                                                    {tech}
                                                </Typography>
                                            ))}
                                        </Stack>
                                    )}
                                </>
                            )}
                            {experience.relevant_projects.length > 0 && (
                                <Stack
                                    direction="column"
                                    my={2}
                                    flexWrap="wrap">
                                    <Typography
                                        variant="h6"
                                        gutterBottom
                                        fontFamily='"Noto Sans", sans-serif'
                                        fontWeight={100}
                                        fontSize={{ xs: 12, md: 16 }}
                                        color={state.color.light}>
                                        Relevant Projects
                                    </Typography>
                                    {experience.relevant_projects.map((project, index) => (
                                        <Stack
                                            key={index}
                                            direction="column">
                                            <Typography
                                                component={'a'}
                                                href={project.link}
                                                target="_blank"
                                                variant="p"
                                                width={'fit-content'}
                                                fontFamily='"Noto Sans", sans-serif'
                                                fontSize={{ xs: 14, md: 18 }}
                                                sx={{
                                                    cursor: 'pointer',
                                                    textDecoration: 'none',
                                                    "&:hover": { color: state.color.teal }
                                                }}
                                                color={state.color.cold}>
                                                {project.project_title}
                                            </Typography>
                                            <Typography
                                                key={index}
                                                color={state.color.light}
                                                fontSize={{ xs: 14, md: 16 }}
                                                padding={{ xs: "2% 4%", md: "1% 3%" }}>
                                                {project.project_description}
                                            </Typography>
                                        </Stack>
                                    ))}
                                </Stack>
                            )}
                        </Stack>
                    </>
                </Stack>
            ))}
        </Stack>
    </Stack>
}

export default Experiences
