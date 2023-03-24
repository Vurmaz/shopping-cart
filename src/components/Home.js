import React from "react"
import Box from '@mui/material/Box'
import HomeIntro from "./HomeIntro";
import Quote from "./Quote";
import Showcase from "./Showcase";
import Services from "./Services";
import Hero from "./Hero";
import Footer from "./Footer"


export default function Home() {
    return(
            <Box>
                <HomeIntro />
                <Quote />
                <Showcase />
                <Services />
                <Hero />
                <Footer />
            </Box>
    )
}
