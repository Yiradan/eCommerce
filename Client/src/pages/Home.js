import { Link } from "react-router-dom"
import Navbar from "./Navbar"

export default function Home(props){

    return (
        <>
            <div className="home">
                <div className="homeLeft">
                    <div className="homeLeftContent">
                        <div className="dreamy">
                            @dreamy.
                        </div>

                        <div className="bigLogo">
                            <img alt='logo' src='/img/logo.png' />
                            <h1>dream.</h1>
                        </div>
                        <hr style={{height: "3px", background: "linear-gradient(to right, magenta, cyan)", width: "70%", margin: "50px 0"}} />
                        <h3>MADE FOR THE FUTURE</h3>
                    </div>
                </div>

                <div className="homeRight">
                    <Link to='/shop'>
                    <div className="toTheShop">
                        To the shop!
                    </div>
                    </Link>
                </div>

                <Navbar
                    cart={props.cart}
                    favoritesList={props.favoritesList}
                />
            </div>
        </>
    )
}