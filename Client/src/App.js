import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import About from './pages/About.js';
import Admin from './pages/Admin.js';
import AdminProducts from './pages/AdminProducts.js';
import Cart from './pages/Cart.js';
import Checkout from './pages/Checkout.js';
import EditProduct from './pages/EditProduct.js';
import Favorite from './pages/Favorite.js';
import Home from './pages/Home';
import NewProduct from './pages/NewProduct.js';
import Orderplaced from './pages/Orderplaced.js';
import Orders from './pages/Orders.js';
import PageNotFound from './pages/PageNotFound.js';
import Product from './pages/Product.js';
import Shop from './pages/Shop.js';
import './pages/admin.css';
import './pages/cartFavorites.css';
import './pages/products.css';
import './styles.css';

function App() {

  const [cart, setCart] = useState(
    JSON.parse(
      localStorage.getItem('cart')
    ) || []
  )

  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const [favoritesList, setFavoritesList] = useState(
    JSON.parse(
      localStorage.getItem('favorites')
    ) || []
  )

  useEffect(()=>{
    localStorage.setItem('favorites', JSON.stringify(favoritesList))
  }, [favoritesList])
    

  return (
    <>
      <Routes>
        <Route path='/' element={<Home
          cart={cart}
          favoritesList={favoritesList}
        /> } />
        <Route
          path='/shop'
          element={<Shop
          favoritesList={favoritesList}
          setFavoritesList={setFavoritesList}
          cart={cart}
        />}
        />
        <Route path='/about'element={<About
          favoritesList={favoritesList}
          cart={cart}
          />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/shop/products/:id' element={<Product
          favoritesList={favoritesList}
          setFavoritesList={setFavoritesList}
          cart={cart}
          setCart={setCart}
        />} />
        <Route path='/admin/products/add-product' element={<NewProduct/>} />
        <Route path='/admin/products' element={<AdminProducts/>} />
        <Route path='/admin/products/edit/:id' element={<EditProduct/>} />
        <Route
          path='/shop/favorites'
          element={<Favorite
          favoritesList={favoritesList}
          setFavoritesList={setFavoritesList}
          cart={cart}
          setCart={setCart}
        />}
        />
        <Route path='/cart' element={<Cart
          cart={cart}
          setCart={setCart}
          favoritesList={favoritesList} />}
        />
        <Route
          path='/cart/checkout'
          element={<Checkout
            setCart={setCart}
            favoritesList={favoritesList}
            cart={cart}
          />}
        />
        <Route
          path='/orderplaced'
          element={<Orderplaced
            cart={cart}
            favoritesList={favoritesList}
          />}
        />
        <Route path='/admin/orders' element={<Orders />} />
        <Route path='*' element={<PageNotFound
          favoritesList={favoritesList}
          cart={cart}
        />} />
      </Routes>
      <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover
            theme="light"
        />
    </>
  )
}

export default App;