import React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import { Link } from "react-router-dom";
import Nav from "./Nav"
import { theme } from "../assets/theme/theme";

export default function Header() {
    return(
            <Box 
                sx={{
                    flexGrow: 1
                }}
            >
                <AppBar 
                    position="static"
                    sx={{
                        bgcolor:theme.palette.primary,
                        paddingTop:'0.5rem'
                    }} 
                >
                    <Toolbar 
                        sx={{
                            display:'flex',
                            justifyContent:'space-between'
                        }}
                    >
                        <Typography 
                            component={Link} 
                            to='/shopping-cart' 
                            variant="h4" 
                            sx={{
                                textDecoration:'none',
                                color:'black'
                            }}
                        >
                            Watch Shop
                        </Typography>
                        <Nav /> 
                    </Toolbar>
                </AppBar>
            </Box>
    )
}