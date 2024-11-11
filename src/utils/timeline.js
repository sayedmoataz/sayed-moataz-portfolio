import React from 'react'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent'
import styled from '@mui/material/styles/styled'
import {
    Divider,
    Stack,
    Typography
} from '@mui/material'

export const CustomTimelineDot = styled(TimelineDot)(() => ({
    backgroundColor: '#40718D'
}))

export const CustomTimelineConnector = styled(TimelineConnector)(() => ({
    backgroundColor: '#40718D'
}))

const CustomTimeline = (props) =>
    <Timeline
        sx={{
            display: { xs: 'none', md: 'flex' },
            [`& .${timelineOppositeContentClasses.root}`]: {
                flex: { xs: 0.05, md: 0.2 },
            },
        }}
    >
        <TimelineItem>
            <TimelineOppositeContent
                color="#FAFAFA"
                fontFamily='"Noto Sans", sans-serif'>
                {props.endDate}
            </TimelineOppositeContent>
            <TimelineSeparator color="#FAFAFA">
                <CustomTimelineDot />
                <CustomTimelineConnector />
            </TimelineSeparator>
            <TimelineContent color="#FAFAFA">
                <Stack
                    mt={4}
                    width={"100%"}
                    sx={{
                        padding: 3,
                        border: `1px solid ${props.colors.primary}`,
                        boxShadow: `0px 0px 5px 1px ${props.colors.primary}`,
                        borderRadius: 5,
                        "&:hover": {
                            border: `1px solid ${props.colors.teal}`,
                            boxShadow: `0px 0px 5px 2px ${props.colors.teal}`,
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
                        sx={{ color: props.colors.light }}>
                        {props.jobTitle}
                    </Typography>
                    <Typography
                        component={'a'}
                        href={props.companyWebsite}
                        target="_blank"
                        variant="p"
                        width={'fit-content'}
                        fontFamily='"Noto Sans", sans-serif'
                        fontSize={{ xs: 18, md: 24 }}
                        sx={{
                            cursor: 'pointer',
                            textDecoration: 'none',
                            "&:hover": { color: props.colors.teal }
                        }}
                        color={props.colors.cold}>
                        {props.companyName}
                    </Typography>
                    <Typography
                        variant="span"
                        fontFamily='"Noto Sans", sans-serif'
                        fontSize={{ xs: 12, md: 16 }}
                        color={props.colors.secondary}>
                        {props.employmentType}
                    </Typography>
                    <Typography
                        variant="span"
                        fontFamily='"Noto Sans", sans-serif'
                        fontSize={{ xs: 14, md: 16 }}
                        fontWeight={300}
                        color={props.colors.secondary}>
                        {props.startDate} - {props.endDate}
                    </Typography>
                    <Typography
                        variant="span"
                        fontSize={{ xs: 14, md: 18 }}
                        fontFamily='"Noto Sans", sans-serif'
                        color={props.colors.primary}>
                        {props.location}
                    </Typography>
                    <Divider sx={{
                        my: 2,
                        border: `1px solid ${props.colors.primary}`
                    }} />
                    <Typography
                        variant="p"
                        gutterBottom
                        fontFamily='"Noto Sans", sans-serif'
                        fontSize={{ xs: 14, md: 18 }}
                        color={props.colors.light}>
                        {props.description}
                    </Typography>
                    {props.technologiesUsed.length > 0 && (
                        <>
                            <Typography
                                variant="h6"
                                mt={2}
                                fontFamily='"Noto Sans", sans-serif'
                                fontWeight={100}
                                fontSize={{ xs: 12, md: 16 }}
                                color={props.colors.light}>
                                Skills Earned
                            </Typography>
                            <Stack
                                direction="row"
                                my={2}
                                flexWrap="wrap">
                                {props.technologiesUsed.map((tech, index) => (
                                    <Typography
                                        key={index}
                                        fontSize={{ xs: 11, md: 16 }}
                                        color={props.colors.light}
                                        sx={{
                                            margin: '4px',
                                            bgcolor: props.colors.primary,
                                            borderRadius: 5,
                                            padding: { xs: "2% 4%", md: "0.5% 2%" },
                                            textAlign: 'center'
                                        }}>
                                        {tech}
                                    </Typography>
                                ))}
                            </Stack>
                        </>
                    )}
                    {props.relevantProjects.length > 0 && (
                        <Stack
                            direction="column"
                            my={2}
                            flexWrap="wrap">
                            {props.relevantProjects.map((project, index) => (
                                <>
                                    <Typography
                                        variant="h6"
                                        gutterBottom
                                        fontFamily='"Noto Sans", sans-serif'
                                        fontWeight={100}
                                        fontSize={{ xs: 12, md: 16 }}
                                        color={props.colors.light}>
                                        Relevant Projects
                                    </Typography>
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
                                                "&:hover": { color: props.colors.teal }
                                            }}
                                            color={props.colors.cold}>
                                            {project.project_title}
                                        </Typography>
                                        <Typography
                                            key={index}
                                            color={props.colors.light}
                                            fontSize={{ xs: 14, md: 16 }}
                                            padding={{ xs: "2% 4%", md: "1% 3%" }}>
                                            {project.project_description}
                                        </Typography>
                                    </Stack>
                                </>
                            ))}
                        </Stack>
                    )}
                </Stack>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent
                fontFamily='"Noto Sans", sans-serif'
                color="#FAFAFA">
                {props.startDate}
            </TimelineOppositeContent>
            <TimelineSeparator color="#FAFAFA">
                <CustomTimelineDot />
            </TimelineSeparator>
            <TimelineContent></TimelineContent>
        </TimelineItem>
    </Timeline>

export default CustomTimeline




