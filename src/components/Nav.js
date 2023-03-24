import React, { useContext, useState } from "react"
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { Link as RouterLink } from "react-router-dom";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Badge from '@mui/material/Badge'
import { GlobalContext } from "./utils";
function Nav() {
    const [value, setValue] = useState(0)
    const context = useContext(GlobalContext)

    return(
            <Box 
                sx={{ 
                    display:'flex',
                    alignItems:'center',                    
                }}
            >
            <Grid 
                container 
                spacing={{xs:1,sm:3,md:5,}}
            >
                <Grid 
                    item
                    xs={4}
                >
                    <Button 
                        onClick={()=>setValue(1)}
                        className={(value === 1 ? 'active': null),'btn'}
                        sx={{            
                            color:'black',                                        
                            fontSize:'1.1rem',
                            '&:hover': {
                                color:'white'
                            }
                        }}
                        variant="text" 
                        component={RouterLink} 
                        to='/shopping-cart'
                    >
                        HOME
                    </Button>
                </Grid>
                <Grid 
                    item 
                    xs={4}
                > 
                    <Button 
                        onClick={()=>setValue(2)}
                        className={(value === 1 ? 'active': null), 'btn'}                
                        sx={{            
                            color:'black',                  
                            fontSize:'1.1rem',
                            '&:hover': {
                                color:'white'
                            }                                                    
                        }}
                            variant="text" 
                            component={RouterLink}
                            to='shop'
                    >
                        SHOP
                    </Button>
                </Grid>
                <Grid 
                    item 
                    xs={4}
                >
                <Badge 
                    onClick={()=>context.setIsOpen(true)} 
                    badgeContent={context.cart.length} 
                    color="primary"
                >
                    <ShoppingBagIcon
                        className="btn1"
                        sx={{
                            color:'black',
                            display:'flex',
                            justifyContent:'center', 
                            fontSize:'2rem', 
                            cursor:'pointer',
                            transition:'color 300ms ease',
                            '&:hover': {
                                color:'white'
                            }
                        }} 
                    />
                </Badge>                    
                </Grid>
                </Grid>
            </Box>

    )
}
export default Nav