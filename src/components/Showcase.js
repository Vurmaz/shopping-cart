import React from "react";
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link } from "react-router-dom";
import Container from '@mui/material/Container';
import LazyLoad from 'react-lazyload';
import { data } from '../data'
import { theme } from "../assets/theme/theme";
import 'react-lazy-load-image-component/src/effects/blur.css';


export default function Showcase() {
    const showcaseData = data.filter((watch) => watch.id < 5)

    return(
        <Container>
        <Box>
        <hr color={theme.palette.primary.main}/>
        <br/>
        <Typography 
            textAlign='center' 
            variant="h3"
            sx={{color:'white'}}
        >
            Popular Watches
        </Typography>
        <Grid 
            container 
            spacing={4} 
            marginTop='1rem'
        >
            {
                showcaseData.map((watch) => {
                    return(
                        <Grid 
                            item 
                            xs={12} 
                            sm={6} 
                            md={3} 
                            key={watch.id}
                        >
                            <Card 
                                sx={{
                                    maxWidth:345,
                                    bgcolor:'black',
                                    border:`1px solid ${theme.palette.primary.main}`,
                                    boxShadow:'0px 0px 8px 0px rgba(209,186,122,1)'
                                }}
                            >
                            <LazyLoad height='250'>
                                 <CardMedia 
                                    component='img' 
                                    alt={watch.name}
                                    src={watch.image} 
                                    height='250'      
                                    sx={{
                                        transition:'transform 500ms ease-in-out',
                                        '&:hover': {
                                            transform:'scale(1.1)'
                                        }
                                    }}                                  
                                />
                            </LazyLoad>
                                <CardContent 
                                    sx={{
                                        display:'flex',
                                        flexDirection:'column'
                                    }
                                }>
                                    <Typography 
                                        sx={{
                                            color:'white',
                                            textDecoration:'none',
                                            transition:'all 300ms ease',
                                            '&:hover': {
                                                textDecoration:'underline',
                                                color:theme.palette.primary.main
                                            }
                                        }} 
                                        component={Link} 
                                        to={`/shopping-cart/shop/${watch.id}`} 
                                        variant="h6"
                                    >
                                        {watch.name}
                                    </Typography>
                                    <Typography 
                                        variant='p'
                                        sx={{color:'white'}}
                                    >
                                        {`${watch.price}$`}
                                    </Typography>
                                    <Button 
                                        component={Link} 
                                        to='/shop' 
                                        fullWidth 
                                        variant='contained'
                                    >
                                        View on shop
                                    </Button>  
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })
            }
        </Grid>
        </Box>            
        </Container>
    )
}