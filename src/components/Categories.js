import React from "react"
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

export default function Categories({handleClick}) {

    return(
        <Grid 
            sx={{
                display:'flex',
                justifyContent:'space-evenly',
                marginTop:'1.5rem'
            }} 
            component='div'
            onClick={handleClick}
        >
            <Button 
                sx={{
                    padding:'.8rem',
                    boxShadow:'0px 0px 8px 0px rgba(209,186,122,1)'
                }} 
                variant="contained" 
                data-name="sport"
            >
                Sport
            </Button>
            <Button 
                sx={{
                    padding:'.8rem',
                    boxShadow:'0px 0px 8px 0px rgba(209,186,122,1)'
                }} 
                variant="contained" 
                data-name="classic"
            >
                Classic
            </Button> 
            <Button 
                sx={{
                    padding:'.8rem',
                    boxShadow:'0px 0px 8px 0px rgba(209,186,122,1)'
                }} 
                variant="contained" 
                data-name='luxary'
            >
                Luxary
            </Button>
            <Button 
                sx={{
                    padding:'.8rem',
                    boxShadow:'0px 0px 8px 0px rgba(209,186,122,1)'
                }} 
                variant="contained" 
                data-name='all'
            >
                All
            </Button>  
        </Grid>

    )
}

