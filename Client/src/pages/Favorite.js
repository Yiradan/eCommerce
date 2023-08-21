import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import Navbar from './Navbar'

function Favorite(props) {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080')
    .then(res => setProducts(prev => res.data))
}, [])

  const navbarStyle = {backgroundColor: "rgb(13,13,13)"}

  const productAdded = (item) => toast.success(
    <p>Product <strong>{item}</strong> was added to the cart!</p>,{
    className: 'toast-message'
  })

  const productLimitReached = (item) => toast.warning(
    <p>There is no more left of this product: <strong>{item}</strong>.</p>,{
        className: 'toast-message'
    }
  )

  const deleteFavorite = (id) => {
    props.setFavoritesList(prev => prev.filter(item => item.id !== id))
  }
  
  function addProduct(id){
    const product = products.filter(item => item.id === id)[0]
    if(!props.cart.length || props.cart.every(x => x.id !== id)){
        productAdded(product.productName)
        props.setCart(prev => [...prev, {...product, quantity: 1, images: product.images.split(' ')[0]}])
    }
    else if(props.cart.length && product.quantity > props.cart.filter(x => x.id === id)[0].quantity){
        productAdded(product.productName)
        props.setCart(prev => prev.map(item => {
            return item.id === id ? {...item, quantity: item.quantity+1} : item
        }))
    }
    else productLimitReached(product.productName)
}
  
  return (
    <>
      <div className='cartFavorites'>
        <div className="cfContent">
          <div className="cfUpper">
            <h3>Favorites</h3>
          </div>
          { props.favoritesList.length === 0 ?
          <div className="ecfLower">
            <h1>Ooopsies...</h1>
            <h2 style={{color: "gray"}}>Looks like your favorites list is empty.</h2>
            <Link to='/shop'>
                Back to the shop
            </Link>
          </div>
          :
          <div className="cfLower">
            {props.favoritesList.map((item, index) => {
              return (
                <div key={index} className="cfProduct">
                  <Link to={`/shop/products/${item.id}`}>
                    <div className="cfpi">
                      <img alt='productImage' src={item.images.split(' ')[0]} />
                    </div>
                    <div className="cfpd">
                      <h1>{item.brand}</h1>
                      <h3 style={{color: "gray"}}>{item.description}</h3>
                      <h2>${item.price}</h2>
                    </div>
                    </Link>
                    <div className="cfpa">
                      <div className="cfDel" onClick={()=> deleteFavorite(item.id)}>
                        <img alt='deleteImage' src='/img/deleteWhite.png' />
                      </div>
                      <div onClick={()=> addProduct(item.id)} className="cfCart">
                        <img alt='cartImage' src='/img/cart.png' />
                      </div>
                    </div>
              </div>
              )
            })}
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

export default Favorite
