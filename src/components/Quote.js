import React from "react";
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function Quote() {
    return(
            <Box 
                sx={{
                    textAlign:'center',
                    padding:'4rem'
                }}
            >
                <Typography 
                    variant="h3"
                    sx={{color:'white'}}
                >
                    "The time you enjoy wasting is not wasted time"
                </Typography>
            </Box>
    )
}