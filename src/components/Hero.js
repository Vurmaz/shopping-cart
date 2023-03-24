import React from "react"
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import bgImage from '../assets/images/bg2.jpg'
import { theme } from "../assets/theme/theme"
import { LazyLoadImage } from "react-lazy-load-image-component"

export default function Hero() {
    return(
        <Container>
            <br />
            <br />
            <hr color={theme.palette.primary.main}/>
            <Grid
                container
                
                sx={{
                    marginTop:'3rem',
                    marginBottom:'5rem',                    
                }}
            >
                <Grid
                    item
                    xs={12}
                    sm={6}
                    component={LazyLoadImage}
                    src={bgImage}
                    height={500}
                    className='image'
                >   
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'center',
                        alignItems:'center',
                        padding:'2rem',
                        gap:'2rem',
                        bgcolor:theme.palette.primary.main,
                        
                    }}
                >
                    <Typography 
                        variant="h4"
                        sx={{
                            color:'black',
                            borderBottom:'2px solid black',
                            padding:'1rem'
                        }}
                    >
                       Coolest Watches
                       
                    </Typography> 
                    
                    <Typography
                        variant="p"
                        sx={{
                            color:'black'
                        }}
                    >
                        Our catalog includes "Luxary", "Sport" and "Classic" watches
                    </Typography> 
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                           bgcolor:'black',
                           color:'white',
                           transition:'transform 600ms ease',
                           '&:hover':{
                               backgroundColor:'black',
                               transform:'scale(1.1)'
                            }

                        }}
                    >
                        Start Shoping
                    </Button>
                </Grid>
              </Grid>
        </Container>
    )
}


