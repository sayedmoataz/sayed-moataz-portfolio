import {
    Toolbar,
} from '@mui/material'
import React from 'react'

import About from './../../components/about/about.js'
import Contact from './../../components/contact/contact.js'
import Home from './../../components/home/home.js'
import Services from './../../components/services/services.js'
import Skills from './../../components/skills/skills.js'

const Main = () => <React.Fragment>
    <div id='Home'></div>
    <Toolbar />
    <Toolbar />
    <Home />

    <div id='About'></div>
    <Toolbar />
    <Toolbar />
    <About />

    <div id='Skills'></div>
    <Toolbar />
    <Toolbar />
    <Skills />

    <div id='Services'></div>
    <Toolbar />
    <Toolbar />
    <Services />

    <div id='Contact'></div>
    <Toolbar />
    <Toolbar />
    <Contact title='Get in touch' />

    <Toolbar />
</React.Fragment>

export default Main