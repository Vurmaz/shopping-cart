import React from 'react'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'
export let theme = createTheme({
    palette: {
        primary : {
            main : '#D1BA7A',
        },
        secondary : {
            main: '#F7F3F2',
        }
    },
    typography: {
      fontFamily: [
        'Montserrat',
        'sans-serif',
      ].join(','),
  }
})
theme = responsiveFontSizes(theme)