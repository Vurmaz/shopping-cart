import React, { useState, useContext } from "react";
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Stack from '@mui/material/Stack'
import LazyLoad from "react-lazyload"
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { GlobalContext } from "./utils";
import { useParams } from "react-router-dom";
import { data } from "../data";
import { theme } from "../assets/theme/theme";

export default function Watch() {
    const paramId = useParams()
    const watch = data.find((watch) => watch.id == paramId.watchId)
    const randomWatches = data.filter((item) => item.category === watch.category).filter((item) => item.id != paramId.watchId)
    const [watchValue, setWatchValue] = useState(1)
    const context = useContext(GlobalContext)
    
    return(
    <>
        <Container className="fade">
            <Grid
                container 
                sx={{
                    marginTop:'2rem',
                    border:'2px solid #D1BA7A',
                    borderRadius:'8px',
                    boxShadow:'0px 0px 8px 0px rgba(209,186,122,1)'
                }}
            >
                <Grid 
                    item 
                    sm={6} 
                    justifyContent='center'
                    sx={{                       
                        margin:'0 auto',
                        [theme.breakpoints.down('sm')]: {
                            borderRight:'none',
                            borderBottom:`1px solid ${theme.palette.primary.main}`
                        }
                    }}
                >
                <LazyLoad height={400}>
                    <img 
                        className="image" 
                        height={400} 
                        src={watch.image}
                    />
                </LazyLoad>
                </Grid>
                <Grid 
                    item 
                    sm={6} 
                    sx={{
                        display:'flex',
                        flexDirection:'column',
                        padding:'1rem',
                        margin:'0 auto',
                        color:'white',
                    }}
                >
                    <Typography 
                        sx={{
                            marginTop:'1rem'
                        }} 
                        variant="h2"
                    >
                        {watch.name}
                    </Typography> 
                    <Typography 
                        variant="h5"
                    >
                        {watch.price}$
                    </Typography> 
                    <ButtonGroup 
                        variant="contained" 
                        sx={{
                            width:'max-content', 
                            marginTop:'1rem'
                        }}
                    >
                        <Button 
                            onClick={() =>{ 
                                if(watchValue < 2)return
                                setWatchValue((prev) => prev - 1)
                            }}
                        >
                            -
                        </Button>
                        <Typography 
                            padding={2} 
                            variant="p"
                            sx={{color:'white'}}
                        >
                            {watchValue}
                        </Typography>
                        <Button 
                            onClick={() => setWatchValue((prev) => prev + 1)}
                        >
                            +
                        </Button>
                    </ButtonGroup>
                    <Button 
                        size="large" 
                        sx={{width:'fit-content',marginTop:'2rem'}} 
                        variant="contained"
                        onClick={() => context.addMultipleWatches(watchValue, watch)}
                    >
                        Add Watches to Cart
                    </Button>   
                </Grid>
            </Grid>
            <br />
            <Grid 
                flexDirection='column'
                sx={{
                    marginTop:'2rem',
                    marginBottom:'2rem',
                    overflow:'auto'
                }}
                className='scrollbar'
            > 
            <Typography 
                textAlign='center'
                variant="h4"
            >
                Recomanded Watches
            </Typography>
            <br />
                <Stack 
                    sx={{
                        margin:'0 auto',
                        paddingBottom:'0.8rem'
                    }} 
                    direction='row' 
                    spacing={2}
                >
                    {
                        randomWatches.map((watch) => {
                            return(
                                <Grid 
                                    key={watch.id}
                                >
                                    <Card 
                                        sx={{
                                            minWidth:275,
                                            border:`1px solid ${theme.palette.primary.main}`,
                                            boxShadow:'0px 0px 8px 0px rgba(209,186,122,1)'
                                        }}
                                    >
                                    <LazyLoad height='200'>
                                        <CardMedia 
                                            component='img' 
                                            height='200' 
                                            src={watch.image}
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
                                                flexDirection:'column',
                                                bgcolor:'black',
                                                color:'white'
                                            }}
                                        >
                                            <Typography 
                                                sx={{
                                                    textDecoration:'none', 
                                                    color:'white',
                                                    transition:'all 300ms ease',
                                                    '&:hover':{
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
                                            >
                                                {watch.price}$
                                            </Typography>
                                            <Button 
                                                onClick={() => context.addToCart(watch)} 
                                                variant="contained"
                                            >
                                                Add to Cart
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )
                        })
                    }
                </Stack>
            </Grid>            
        </Container>
        <Footer />
    </>
    )
}