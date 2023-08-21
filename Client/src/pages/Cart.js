import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function Cart(props) {

  const [products, setProducts] = useState([])

  useEffect(()=> {
    axios.get('http://localhost:8080')
    .then(res => setProducts(res.data))
  })

  const clearCart = () =>{
    props.setCart(prev => [])
  }

  const navbarStyle = {backgroundColor: "rgb(13,13,13)"}

  const removeProduct = (id) => {
    props.setCart(prev => prev.filter(item => item.id !== id))
  }

  const decrement = (id) => {
    props.setCart(prev => prev.map(item =>{
      if(item.id === id && item.quantity > 1)
        return {...item, quantity: item.quantity-1}
      else return item
    }))
  }

  const increment = (id) =>{
    props.setCart(prev => prev.map(item =>{
      if(item.id === id && item.quantity < products.filter(x => x.id === id)[0].quantity)
        return {...item, quantity: item.quantity+1}
      else return item
    }))
  }

  const total = () => {
    let sum = 0
    props.cart.map(item => sum+=item.quantity*item.price)
    return sum
  }

  return (
    <>
      <div className='cartFavorites'>
        <div className="cfContent">
          <div className="cfUpper">
            <h3>Your shopping cart</h3>{props.cart.length > 0 && <h3 style={{color: "rgb(220, 0, 0)", cursor: "pointer"}} onClick={clearCart}>Clear cart</h3>}
          </div>
          { props.cart.length === 0 ?
          <div className="ecfLower">
            <h1>Ooopsies...</h1>
            <h2 style={{color: "gray"}}>Looks like your shopping cart  is empty.</h2>
            <Link to='/shop'>
                Back to the shop
            </Link>
          </div>
          :
          <div className="cfLower">
            {props.cart.map((item, index) => {
              return (
                <div key={index} className="cProduct">
                  <Link to={`/shop/products/${item.id}`}>
                    <div className="cpi">
                      <img alt='productImage' src={item.images} />
                    </div>
                    <div className="cpd">
                      <h1>{item.brand}</h1>
                      <h3 style={{color: "gray"}}>{item.description}</h3>
                      <h2>${item.price}</h2>
                    </div>
                    </Link>
                    <div className="cpt">
                      <h1>Subtotal</h1>
                      <div className="quantityButtons">
                        <img
                          style={{opacity: item.quantity === 1 ? "0.3" : "1", transition: ".3s"}}
                          onClick={()=> decrement(item.id)} alt='minusButton'
                          src='/img/minus.png'
                        />
                        <h2>{item.quantity}</h2>
                        <img
                          
                          onClick={()=> increment(item.id)}
                          alt='plusButton'
                          src='/img/plus.png'
                        />
                      </div>
                      <h1>${(item.quantity*item.price).toFixed(2)}</h1>
                    </div>
                    <div className="cpa">
                      <div className="cDel" onClick={()=> removeProduct(item.id)}>
                        <img alt='deleteImage' src='/img/deleteWhite.png' />
                      </div>
                    </div>
              </div>
              )
            })}
            <div className="subTotal">
              <div className="stUpper">
                <h1>Total: </h1>
                <h1>$ {total().toFixed(2)}</h1>
              </div>
              <Link to='/cart/checkout'>
                <div className="stLower">
                  <p>Proceed to checkout</p>
                </div>
              </Link>
            </div>
          </div>
        }
        </div>
      </div>
      <Navbar
        cart={props.cart}
        favoritesList={props.favoritesList}
        navbarStyle={navbarStyle}
      />
    </>
  )
}

export default Cart
