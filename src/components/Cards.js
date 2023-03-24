import React, { useState, useRef, useEffect, useContext } from "react"
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button'
import { Link } from "react-router-dom";
import { data } from '../data';
import { GlobalContext } from "./utils";
import Categories from "./Categories";
import { theme } from "../assets/theme/theme";

export default function Cards() {
    const [shop, setShop] = useState(data)
    const cardRef = useRef([])
    const context = useContext(GlobalContext)

    const handleClick = (event) => {
        if(event.target.attributes[3].value === 'all') {
            setShop(data)
            return
        }
        const newShop = data.filter((watch) => watch.category === event.target.attributes[3].value)
        setShop(newShop)
    }
    const addRef = (element) => {
        if(element && !cardRef.current.includes(element)){
         cardRef.current.push(element)   
        }
    }
    const onLoad = (event) => {
        event.target.classList.add('show')
        event.target.classList.remove('hover-card')
    }
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            let image = entry.target.childNodes[0].childNodes[0]
            if(entry.isIntersecting){
                image.src = image.dataset.src
                observer.unobserve(entry.target)
            }
        })
    },{
        threshold:0.75,
    })
    cardRef.current.forEach((ref) => {
        observer.observe(ref)
    })
    },[cardRef, shop])
    
    
    return (
        <Container 
            className="fade"
        >
            <Categories 
                handleClick={handleClick} 
            />
            <Grid 
                sx={{
                    marginTop: '1rem', 
                    marginBottom: '2rem'
                }} 
                container 
                spacing={6}
            >
                {
                    shop.map((item) => {
                        return (
                            <Grid 
                                ref={addRef} 
                                key={item.id} 
                                item 
                                xs={12}
                                sm={6} 
                                md={4}
                                margin='0 auto'
                            >
                                <Card                          
                                    sx={{
                                        backgroundColor:'black',
                                        color:'white',
                                        border:`1px solid ${theme.palette.primary.main}`,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        maxWidth: 345,
                                        boxShadow: '0px 0px 8px 0px rgba(209,186,122,1)',
                                        
                                    }}
                                >                                                           
                                    <CardMedia 
                                        onLoad={onLoad} 
                                        className="hover-card" 
                                        component='img' 
                                        height='250' 
                                        data-id={item.id} 
                                        data-src={item.image}                                              
                                    />
                                    <CardContent 
                                        sx={{ 
                                            display:'flex', 
                                            flexDirection: 'column',
                                            gap:'0.5rem',
                                            color:'white' 
                                            }}
                                        >
                                        <Typography 
                                            component={Link}
                                            to={`${item.id}`}
                                            sx={{
                                                textDecoration:'none',
                                                color:'white',                                                
                                                transition:'all 300ms ease',
                                                '&:hover':{textDecoration:'underline',color:theme.palette.primary.main}
                                            }} 
                                            variant="h5"
                                        >
                                            {item.name}
                                        </Typography>
                                        <Typography 
                                            variant='p'
                                        >
                                            {`${item.price}$`}
                                        </Typography>
                                        <Button 
                                            onClick={() => context.addToCart(item)} 
                                            fullWidth 
                                            variant='contained'
                                        >
                                        Add To Cart
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Container>
    )
}