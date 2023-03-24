import React from "react"
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import WatchIcon from '@mui/icons-material/Watch';
import FlightIcon from '@mui/icons-material/Flight';
import { theme } from '../assets/theme/theme'

export default function Services() {
    return(
        <Container 
            sx={{
                marginTop:'3rem'
            }}
        >
        <hr color={theme.palette.primary.main}/>
        <br />
            <Grid
                container
                spacing={1}
                sx={{
                    color:'white',
                    marginTop:'2rem',
                    bgcolor:theme.palette.primary.main,
                    padding:'2rem',
                    boxShadow: '0px 0px 8px 0px rgba(209,186,122,1)',
                    borderRadius:'8px',
                    transition:'all 700ms ease-in-out',
                    '&:hover':{
                        boxShadow:'0px 0px 8px 5px rgba(209,186,122,1)'
                    },
                    [theme.breakpoints.down('sm')]: {
                        padding:'0',
                        gap:'2rem',
                        bgcolor:'black',
                        boxShadow:'none'
                    }
                }}
            >
                <Grid
                    item
                    xs={12}
                    sm={4}
                    sx={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'center',
                        alignItems:'center',
                        gap:'0.5rem',
                        color:'white',
                        borderRight:'2px solid white',
                        [theme.breakpoints.down('sm')]: {
                            padding:'1rem',
                            border:'2px solid white',
                            bgcolor:theme.palette.primary.main,
                            borderRadius:'8px',
                            boxShadow: '0px 0px 8px 0px rgba(209,186,122,1)',
                        }
                    }}

                >
                    <ShoppingBasketIcon 
                        sx={{
                            fontSize:'4rem'
                        }}
                    />
                    <Typography
                        variant="h6"
                    >
                        Easy Shop
                    </Typography>
                </Grid> 
                <Grid
                    item
                    xs={12}
                    sm={4}
                    sx={{                        
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'center',
                        alignItems:'center',
                        gap:'0.5rem',
                        borderRight:'2px solid white',
                        [theme.breakpoints.down('sm')]: {
                            padding:'1rem',                            
                            border:'2px solid white',
                            bgcolor:theme.palette.primary.main,
                            borderRadius:'8px',
                            boxShadow: '0px 0px 8px 0px rgba(209,186,122,1)',
                        }
                    }}
                >
                    <WatchIcon
                        sx={{
                            fontSize:'4rem'
                        }}                         
                    />
                    <Typography variant="h6">
                        Rich Catalog
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={4}
                    sx={{                        
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'center',
                        alignItems:'center',
                        gap:'0.5rem',
                        [theme.breakpoints.down('sm')]: {
                            padding:'1rem',                        
                            border:'2px solid white',
                            bgcolor:theme.palette.primary.main,
                            borderRadius:'8px',
                            boxShadow: '0px 0px 8px 0px rgba(209,186,122,1)',
                        }
                    }}
                >
                    <FlightIcon
                        sx={{
                            fontSize:'4rem'
                        }}
                    />
                    <Typography variant="h6">
                        Free Shipping
                    </Typography>
                </Grid>
            </Grid>

        </Container>
    )
}