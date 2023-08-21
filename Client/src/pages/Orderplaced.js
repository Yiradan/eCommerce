import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function Orderplaced(props) {
    return (
        <>
            <div className="orderPlaced">
                <div className="orderPlacedContent">
                    <img src='/img/orderPlaced.png' alt='orderPlaced' />
                    <h1 style={{color: "gray"}}>Your order has been successfully processed!</h1>
                    <Link to='/shop'>
                        <div className="backToShop">Back to the shop</div>
                    </Link>
                </div>
            </div>
            <Navbar
                favoritesList={props.favoritesList}
                cart={props.cart}
                navbarStyle={{backgroundColor: "rgb(13,13,13)"}}
            />
        </>
    )
}

export default Orderplaced
