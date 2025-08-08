import {
  Box,
  Container,
  CssBaseline,
} from '@mui/material'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { SnackbarProvider } from 'notistack'
import React, {
  useEffect,
} from 'react'
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom"

import Footer from './components/footer/footer.js'
import ResponsiveAppBar from './components/navbar/navbar.js'
import { AppProvider } from './context/context/context.js'
import Blog from "./pages/blog/blog.js"
import Experiences from "./pages/experiences/experiences.js"
import Main from "./pages/main/main.js"
import Projects from "./pages/projects/projects.js"
import FloatingActionButton from './utils/floatingActionButton.js'

const App = () => {

  useEffect(() => {
    console.clear()

    console.log("%c Sayed Moataz Daawoud",
      `color:#368F80;
      font-size:75px;
      font-weight:bold;
      font-family:Noto Sans, sans-serif;`)

    Aos.init({ duration: 1000 })
  }, [])

  return <AppProvider>
    <React.Fragment>
      <CssBaseline />

      <Router>
        <Box>
          <Container maxWidth="xl">
            <SnackbarProvider maxSnack={3}>
              <ResponsiveAppBar />

              <Routes>
                <Route exact path='/' element={<Main />} />
                <Route exact path='/experiences' element={<Experiences />} />
                <Route exact path='/projects' element={<Projects />} />
                <Route exact path='/blog' element={<Blog />} />

                <Route path="*" element={<Navigate replace to="/" />} />
              </Routes>
              <Footer />
              <FloatingActionButton />
            </SnackbarProvider>
          </Container>
        </Box>
      </Router>
    </React.Fragment>
  </AppProvider >
}

export default App
