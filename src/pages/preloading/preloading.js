import React from 'react'
import { Box } from '@mui/material'
import Lottie from 'lottie-react'

import portfolio from "./../../assets/lotties/me.json"

import "./preloading.css"

const Preloading = () =>
  <div id="preloading">
    <Box sx={{ width: { xs: "70%", md: "30%" } }}>
      <Lottie
        loop={true}
        autoplay={true}
        animationData={portfolio}
      />
    </Box>
  </div >

export default Preloading