import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import SharedComponents from './components/SharedComponents'
import Home from "./components/Home";
import Shop from "./components/Shop";
import Watch from "./components/Watch";
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './assets/theme/theme'
import { GlobalContext } from "./components/utils";


function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [cart, setCart] = useState([])
  
  const addToCart = (item) => {
    setCart([...cart, item])
  }
  const addMultipleWatches = (value, watch) => {
    let i = 0
    while(i < value){
      setCart((prev)=>[...prev, watch])
      i++
    }
  } 
  
  return (
    <GlobalContext.Provider value={{isOpen, setIsOpen, cart, setCart, addToCart, addMultipleWatches}}>
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="shopping-cart" element={<SharedComponents />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:watchId" element={<Watch />} />
        </Route>
      </Routes>
    </ThemeProvider>
    </GlobalContext.Provider>
  )
}

export default App;
