import React, { useContext, useState } from 'react'
import {
    Box,
    Stack,
    Toolbar,
    Typography,
} from '@mui/material'
import {
    TabContext,
    TabPanel,
} from '@mui/lab'
import LaunchIcon from '@mui/icons-material/Launch'

import { AppContext } from './../../context/context/context.js'
import { CustomTabs, CustomTab } from '../../utils/tab.js'
import { ColorButton } from '../../utils/button.js'
import data from "./../../data/projects.json"

const Projects = () => {
    const { state } = useContext(AppContext)
    const [value, setValue] = useState("All")

    const handleChange = (e, newValue) => setValue(newValue)

    return <Box id="Projects">
        <Toolbar />
        <Toolbar />
        <TabContext value={value}>
            <Box
                display='flex'
                justifyContent="center"
                width="100%"
                mt={{ xs: 0, md: 10 }}
            >
                <CustomTabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    aria-label="Portfolio Projects"
                >
                    {data.categories.keys.map((category, i) =>
                        <CustomTab
                            key={i}
                            value={category}
                            label={`${category} (${data.categories[category].projects.length})`} />
                    )}
                </CustomTabs>
            </Box>
            <Stack
                direction={{ xs: 'column' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                my={5}
            >
                {data.categories[value].projects.map((projectKey, index) => {
                    let project = data.projects[projectKey]

                    return <Box key={project.title}>
                        <TabPanel value={value}>
                            <Stack
                                data-aos={(index + 1) % 2 === 1 ? "fade-right" : "fade-left"}
                                direction={{
                                    xs: 'column-reverse',
                                    md: (index + 1) % 2 === 1
                                        ? 'row'
                                        : 'row-reverse',
                                }}
                                spacing={{ xs: 1, sm: 2, md: 4 }}
                                justifyContent="space-around"
                            >
                                <Stack
                                    width={{ xs: '90%', md: '45%' }}
                                    direction={{ xs: 'column' }}
                                    spacing={{ xs: 1 }}
                                >
                                    <Typography
                                        variant='h4'
                                        gutterBottom
                                        fontFamily='"Noto Sans", sans-serif'
                                        fontSize={{ xs: 28, md: 34 }}
                                        color={state.color.light}
                                        alignSelf={{ xs: "center", md: "flex-start" }}
                                    >
                                        {project.title}
                                    </Typography>
                                    <Box
                                        component={'a'}
                                        width={'fit-content'}
                                        href={project.associated.link}
                                        color={state.color.cold}
                                        fontSize={20}
                                        target='_blank'
                                        sx={{
                                            textDecoration: 'none',
                                            '&:hover': { color: state.color.teal }
                                        }}
                                    >
                                        {project.associated.name}
                                    </Box>
                                    <Typography
                                        variant='span'
                                        color={state.color.primary}
                                        fontFamily='"Noto Sans", sans-serif'
                                        fontSize={14}
                                    >
                                        {`${project.start_date} - ${project.end_date}`}
                                    </Typography>
                                    <Typography
                                        variant='span'
                                        fontFamily='"Noto Sans", sans-serif'
                                        color={state.color.light}
                                        maxHeight={200}
                                        my={5}
                                        overflow='scroll'
                                    >
                                        {project.description}
                                    </Typography>
                                    <Typography
                                        variant='span'
                                        fontFamily='"Noto Sans", sans-serif'
                                        color={state.color.secondary}
                                        fontSize={16}
                                    >
                                        Technologies & Tools:
                                    </Typography>
                                    <Typography
                                        variant='span'
                                        fontFamily='"Noto Sans", sans-serif'
                                        color={state.color.light}
                                        fontSize={14}
                                    >
                                        {project.skills.join(' - ')}
                                    </Typography>
                                    {/* {project.contributors
                                        ? <Stack direction='column'>
                                            <Box
                                                component={'a'}
                                                width={'fit-content'}
                                                href={project.contributors.link}
                                                target='_blank'
                                                sx={{
                                                    color: state.color.secondary,
                                                    fontSize: 16,
                                                    textDecoration: 'none',
                                                    '&:hover': { color: state.color.teal }
                                                }}
                                            >
                                                <Stack
                                                    direction="row"
                                                    justifyContent="center"
                                                    alignItems="center">
                                                    Contributors <LaunchIcon sx={{ width: 15, mx: 1 }} />
                                                </Stack>
                                            </Box>
                                            <Typography
                                                variant='span'
                                                py={1}
                                                fontFamily='"Noto Sans", sans-serif'
                                                color={state.color.light}
                                                fontSize={14}
                                            >
                                                {"I collaborated with " + project.contributors.number + " teamates to complete this project"}
                                            </Typography>
                                        </Stack>
                                        : null
                                    } */}
                                    <Box width="50%" alignSelf={{ xs: "center", md: "flex-start" }}>
                                        <ColorButton
                                            href={project.link}
                                            target='_blank'
                                        >
                                            <Typography
                                                mr={0.5}
                                                fontSize={{ xs: 14, md: 16 }}
                                                fontFamily='"Noto Sans", sans-serif'
                                            >{project.action}</Typography>
                                            <LaunchIcon fontSize='100px' />
                                        </ColorButton>
                                    </Box>
                                </Stack>
                                <Box
                                    width={{ xs: '90%', md: '45%' }}
                                    display='flex'
                                    justifyContent='center'
                                    alignItems='center'
                                >
                                    <Box
                                        component='img'
                                        src={project.thumbnail}
                                        loading='eager'
                                        alt={project.title}
                                        minWidth={{ xs: '40%' }}
                                        maxHeight={{ xs: 200, md: 300 }}
                                        sx={{
                                            "&:hover": {
                                                filter: `drop-shadow(0px 0px 10px ${state.color.primary})`,
                                                transition: 'all 0.3s ease-in-out',
                                            }
                                        }} />
                                </Box>
                            </Stack>
                        </TabPanel>
                    </Box>
                })}
            </Stack>
        </TabContext>
    </Box>
}

export default Projects