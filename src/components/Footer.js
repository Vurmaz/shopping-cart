import React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import GitHubIcon from '@mui/icons-material/GitHub';
import { theme } from "../assets/theme/theme";

export default function Footer() {
    return(
        <Box 
            sx={{
            flexGrow:1
            }}
        >
            <AppBar
                sx={{
                    position:'static',
                    bgcolor:theme.palette.primary.main,
                }}
            >
                <Toolbar
                    sx={{
                        display:'flex',
                        justifyContent:'center',
                        gap:'1rem'
                    }}
                >
                    <Typography variant="h5">
                        Created By Vurmaz
                    </Typography>
                    <a href="https://github.com/Vurmaz">
                    <GitHubIcon 
                            sx={{                            
                                fontSize:'2.5rem',
                                transition:'all 500ms ease-in-out',
                                cursor:'pointer',
                                color:'black',
                                '&:hover': {
                                    color:'white',
                                    transform:'scale(1.1)'
                                }
                            }}
                    />       
                    </a> 
                </Toolbar>
            </AppBar>
        </Box>
    )
}