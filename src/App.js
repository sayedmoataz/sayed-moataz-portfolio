import {
  Box,
  Container,
  CssBaseline
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
import LoadingScreen from './components/loading/LoadingScreen.js'
import ResponsiveAppBar from './components/navbar/navbar.js'
import { AppProvider } from './context/context/context.js'
import Blog from "./pages/blog/blog.js"
import Experiences from "./pages/experiences/experiences.js"
import Main from "./pages/main/main.js"
import Projects from "./pages/projects/projects.js"
import Publications from "./pages/publications/publications.js"
import FloatingActionButton from './utils/floatingActionButton.js'

const App = () => {
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    console.clear()

    console.log("%c Sayed Moataz Daawoud",
      `color:#368F80;
      font-size:75px;
      font-weight:bold;
      font-family:Noto Sans, sans-serif;`)

    Aos.init({ duration: 1000 })

    // Hide loading screen after 2 seconds
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return <AppProvider>
    <React.Fragment>
      <CssBaseline />

      <Router>
        <Box>
          <Container maxWidth="xl">
            <SnackbarProvider maxSnack={3}>
              <ResponsiveAppBar />

              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/experiences" element={<Experiences />} />
                <Route path="/publications" element={<Publications />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="*" element={<Navigate to="/" />} />
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
