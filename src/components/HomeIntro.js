import React from "react"
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import LazyLoad from "react-lazyload"
import { Link } from "react-router-dom";
import img1 from '../assets/images/bg4.jpg'
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function HomeIntro() {
    return(
        <Box 
            sx={{
                justifyContent:'center',
                alignItems:'center',
                display:'flex',
                maxHeight:'500px',
                overflow:'hidden'
            }}
        >
        <LazyLoad>
            <Box 
                sx={{
                    position:'relative',
                    filter:'brightness(50%)'
                }} 
                component={LazyLoadImage} 
                src={img1}
                alt={'home'}                                    
            >
            </Box>
        </LazyLoad>
            <Typography 
                sx={{
                    position:'absolute',
                    color:'white',
                    border:'1px solid #D1BA7A',
                    padding:'1rem',
                    cursor:'pointer',
                    textDecoration:'none',
                    transition:'all 800ms ease',
                    '&:hover':{background:'#D1BA7A',color:'black'}
                }} 
                variant='h4'
                component={Link}
                to='/shopping-cart/shop'
            >
            Shop Now
            </Typography>
        </Box>
    )
}