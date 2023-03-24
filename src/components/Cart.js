import React, { useContext } from "react"
import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import CloseIcon from '@mui/icons-material/Close'
import LazyLoad from "react-lazyload"
import { GlobalContext } from "./utils"
import { theme } from "../assets/theme/theme"


export default function Cart() {
    const context = useContext(GlobalContext)
    const items = new Set(context.cart)
    const cartItems = Array.from(items)

    const totalCartValue = () => {
        return context.cart.map((item)=>item.price).reduce((acc, value) => acc + value, 0)
    }
    const findItemLenght = (watch) => {
        return context.cart.filter((item) => item.id === watch.id).length
    }    
    const removeItem = (watch) => {     
        const index = context.cart.indexOf(watch) 
        if(index > 0){
            let sliced1 = (context.cart.slice(0, index).concat(context.cart.slice(index + 1, context.cart.length)))
            context.setCart(sliced1)
            return
        }
        const sliced2 = context.cart.slice(index + 1, context.cart.length) 
        context.setCart(sliced2)
    }

    return(
        <Drawer
            sx={{minHeight:'100vh', position:'relative',bgcolor:theme.palette.primary.main,}}
            anchor="right"
            open={context.isOpen}
        >
            <header>
                <Grid 
                    sx={{
                        minHeight:'68px', 
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'space-between',
                        gap:'4rem',
                        padding:'1rem',
                    }}
                >                   
                    <Button 
                        onClick={() => context.setIsOpen(false)}
                        sx={{
                            color:'black',
                            transition:'all 400ms ease-in-out',
                            '&:hover':{
                                color:'white',
                                transform:'scale(1.1)'
                            }
                        }}
                    >
                        <CloseIcon /> 
                    </Button> 
                   <Typography 
                        sx={{
                            paddingRight:'0.5rem'
                        }} 
                        variant="h5"
                    >
                        Shopping Cart
                    </Typography> 
                </Grid>
                <hr color="black"/>
            </header>
            {
                context.cart.length === 0 && 
                <Grid
                    sx={{
                        display:'flex',
                        justifyContent:'center',
                    }}
                >
                    <Typography variant='h5'>Cart is empty</Typography>
                </Grid>
            }
            <Grid 
            className="black-scrollbar"
                sx={{
                    maxHeight:'calc(100vh - 86px - 5rem)', 
                    overflow:'auto',
                    display:'flex',
                    flexDirection:'column',
                    gap:'0.5rem',
                }}
            >
                {
                    cartItems.map((item)=>{
                        return(
                            <Grid 
                                key={item.id} 
                                direction='row' 
                                container
                                spacing={1}
                            >
                                <Grid
                                    item 
                                    xs={6}
                                >
                                <LazyLoad height='100'>
                                    <img 
                                        className="image"
                                        height='100' 
                                        src={item.image}
                                    />  
                                </LazyLoad>     
                                </Grid>
                                <Grid 
                                    item 
                                    xs={6}
                                >
                                    <Grid 
                                        sx={{
                                            display:'flex',
                                            flexDirection:'column',
                                            
                                        }}
                                    >
                                        <Typography 
                                            variant="h5"
                                        >
                                            {item.name}
                                        </Typography>
                                        <Typography 
                                            variant='p'
                                        >
                                            {item.price}$
                                        </Typography>
                                    </Grid>
                                <ButtonGroup>
                                    <Button
                                        onClick={() => removeItem(item)}
                                        variant="contained"
                                        sx={{
                                            bgcolor:'black',
                                            color:'white',
                                            '&:hover':{bgcolor:'black'}
                                        }}
                                    >
                                        -
                                    </Button>
                                    <Typography 
                                        sx={{
                                            padding:'0.5rem 1rem',
                                        }}
                                    >
                                        {findItemLenght(item)}
                                    </Typography>
                                    <Button 
                                        variant="contained"
                                        onClick={()=>context.setCart((prev) => [...prev, item])}
                                        sx={{
                                            bgcolor:'black',
                                            color:'white',
                                            '&:hover':{bgcolor:'black'}
                                        }}
                                    >
                                        +
                                    </Button>
                                </ButtonGroup>
                                </Grid>
                            </Grid>
                        )
                    })
                }
            </Grid>
            <footer>
                <Grid 
                    container 
                    spacing={2} 
                    sx={{
                        position:'absolute',
                        bottom:'0', 
                        minHeight:'3rem', 
                        paddingBottom:'1rem',
                        paddingLeft:'1rem',
                        borderTop:'2px solid '
                    }}
                >                
                  <Grid 
                        item 
                        xs={6}
                    >
                    <Typography 
                        variant="h4"
                    >
                        Total:
                    </Typography>
                  </Grid>
                  <Grid 
                        item 
                        xs={6}
                    >
                    <Typography 
                        variant="h4"
                    >
                        {totalCartValue()}$
                    </Typography>
                  </Grid>
                </Grid>
            </footer>
        </Drawer>
        
    )
}