import { Link } from "react-router-dom"

export default function Navbar(props){

    const url = window.location.href

    return (
        <div style={props.navbarStyle} className="navbar">
            
            <div className="navbarLeft">
                <Link to='/' >
                    <img alt='logo' src='/img/logo.png' />
                    <p className="logoText" >dream.</p>
                </Link>
            </div>
            

            <div className="navbarMiddle">
                    <Link to="/"><h3 style={url.endsWith('/') ? {color: "rgb(170, 79, 255)", textShadow: "1px 0 10px"} : {color: ""}}>HOME</h3></Link>
                    <Link to="/shop"><h3 style={{color: url.endsWith('shop') ? "rgb(170, 79, 255)" : ""}}>SHOP</h3></Link>
                    <Link to="/about"><h3 style={{color: url.endsWith('about') ? "rgb(170, 79, 255)" : ""}}>ABOUT</h3></Link>
                    <Link to='/admin'><h3>Admin</h3></Link>
            </div>

            <div className="navbarRight">
                <div className="navbarFavorites">
                    <Link to='/shop/favorites'>
                        <img alt='favorites' src={props.favoritesList.length ? '/img/heartFull.png' : '/img/heartEmptyWhite.png'} />
                    </Link>
                    {props.favoritesList.length > 0 && <p className="favoritesNumber">{props.favoritesList.length}</p>}
                </div>
                <div className="navbarFavorites">
                    <Link to='/cart'>
                        <img alt='cart' src='/img/cart.png' />
                    </Link>
                    {props.cart.length > 0 && <p className="favoritesNumber">{props.cart.length}</p>}
                </div>
                
            </div>

        </div>
    )
}