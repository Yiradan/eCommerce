import React from 'react';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';

function PageNotFound(props) {

  const navbarStyle = {backgroundColor: "rgb(13,13,13)"}
  
  return (
    <div className='pageNotFound'>
        <div className="pageNotFoundContent">
            <img alt='pageNotFound' src='https://www.vizion.com/wp-content/uploads/2018/09/shutterstock_479042983.jpg' />
            <Link to='/'>
              <div className="stLower">
                Take me back to the home page
              </div>
            </Link>
        </div>
        <div>
      </div>
        
      <Navbar
        navbarStyle={navbarStyle}
        cart={props.cart}
        favoritesList={props.favoritesList}
      />
    </div>
  )
}

export default PageNotFound
