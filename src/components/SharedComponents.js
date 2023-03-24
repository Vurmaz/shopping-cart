import Header from "./Header"
import Cart from "./Cart"
import { Outlet } from 'react-router-dom'

function SharedComponents() {
    return(
        <div className="fade">
            <Header />            
            <Cart />
            <Outlet />
        </div>
    )
}
export default SharedComponents