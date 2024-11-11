import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom"
import {
    Avatar,
    AppBar,
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Button,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import { AppContext } from '././../../context/context/context.js'
import data from "./../../data/navbar.json"
import resume from './../../assets/pdf/Sayed_Moataz___Flutter_Developer.pdf'
import logo from '../../assets/sayed.png'

const drawerWidth = 240

const DrawerAppBar = (props) => {
    const { window } = props
    const [mobileOpen, setMobileOpen] = useState(false)
    const { state } = useContext(AppContext)
    const navigate = useNavigate()

    const handleDrawerToggle = () => setMobileOpen((prevState) => !prevState)

    const container = window !== undefined ? () => window().document.body : undefined

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', }}>
            <Box
                onClick={() => navigate('/')}
                sx={{ p: 2, textAlign: '-webkit-center' }}
            >
                <Avatar src={logo} alt='Mohammed' />
            </Box>
            <Divider sx={{ bgcolor: state.color.primary, }} />
            <List>{data.drawer.map((item, index) => {
                return (
                    <ListItem disablePadding key={index}>
                        <ListItemButton
                            onClick={() => navigate(item.link)}
                            sx={{
                                textAlign: 'center',
                                '&:hover': {
                                    backgroundColor: '#368F80',
                                },
                            }}>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                )
            })}
                <ListItem disablePadding>
                    <ListItemButton
                        href={resume}
                        target="_blank"
                        sx={{
                            textAlign: 'center',
                            '&:hover': {
                                backgroundColor: '#368F80',
                            },
                        }}>
                        <ListItemText primary={"Resume"} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box >
    )

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar
                component="nav"
                sx={{
                    bgcolor: '#1E1E1EE9',
                    boxShadow: `0px 0px 15px 1px ${state.color.primary}`,
                    py: '0.75%',
                }}
            >
                <Toolbar sx={{ justifyContent: { sm: 'space-between' } }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box onClick={() => navigate('/')}>
                        <Avatar src={logo} alt='Mohammed' />
                    </Box>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {data.toolbar.map((item, index) => <Button
                            key={index}
                            onClick={() => navigate(item.link)}
                            sx={{
                                color: state.color.light,
                                '&:hover': {
                                    backgroundColor: '#368F80',
                                },
                            }}>
                            {item.title}
                        </Button>
                        )}
                        <Button
                            href={resume}
                            target="_blank"
                            sx={{
                                color: state.color.light,
                                '&:hover': {
                                    backgroundColor: '#368F80',
                                },
                            }}>
                            Resume
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            color: state.color.light,
                            bgcolor: state.color.dark,
                            boxShadow: `0px 0px 15px 1px ${state.color.primary}`,
                        },
                    }}>
                    {drawer}
                </Drawer>
            </nav>
        </Box >
    )
}

export default DrawerAppBar
