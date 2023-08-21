import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

function Checkout(props) {

    const navigate = useNavigate()

    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [pCode, setPCode] = useState('')
    const [address, setAddress] = useState('')

    const total = () => {
        let sum = 0
        props.cart.map(item => sum+=item.quantity*item.price)
        return sum
    }

    const placeOrder = (e) => {
        e.preventDefault()
        const order = props.cart.map(item => {
            return {
                product_id: item.id,
                productName: item.productName,
                price: item.price,
                quantity: item.quantity,
                subTotal: (item.quantity*item.price).toFixed(2)
            }
        })
        console.log(order)
        axios.post('http://localhost:8080/orderplaced', {
        fName: fName,
        lName: lName,
        number: number,
        email: email,
        country: country,
        city: city,
        pCode: pCode,
        address: address,
        order: order,
        total: total()
        }).then((data) => {
        props.setCart(prev => [])
        navigate('/orderplaced')
        })
    }

    return (
        <>
            <div className='cartFavorites'>
                <div className="cfContent">
                    <div className="cfUpper">
                        <h3>Checkout</h3>
                    </div>
                    <div className="checkoutLower">
                        <form onSubmit={placeOrder}>
                            <div className='submit'>
                                <div className="sInput">

                                    <div className="sInputContainer">
                                        <img alt='fName' src='/img/fName.png' />
                                        <input required placeholder='First name' id="fName" type='text' value={fName} onChange={e=> setFName(e.target.value)}></input>
                                    </div>

                                    <div className="sInputContainer">
                                        <img alt='lName' src='/img/lName.png' />
                                        <input required placeholder='Last name' id="lName" type='text' value={lName} onChange={e=> setLName(e.target.value)}></input>
                                    </div>

                                    <div className="sInputContainer">
                                        <img alt='number' src='/img/number.png' />
                                        <input required placeholder='Phone number' id="number" type='text' value={number} onChange={e=> setNumber(e.target.value)}></input>
                                    </div>

                                    <div className="sInputContainer">
                                        <img alt='email' src='/img/email.png' />
                                        <input required placeholder='E-mail address' id="email" type='email' value={email} onChange={e=> setEmail(e.target.value)}></input>
                                    </div>

                                    <div className="sInputContainer">
                                        <img alt='country' src='/img/country.png' />
                                        <input required placeholder='Country' id="country" type='text' value={country} onChange={e=> setCountry(e.target.value)}></input>
                                    </div>

                                    <div className="sInputContainer">
                                        <img alt='city' src='/img/city.png' />
                                        <input required placeholder='City' id="city" type='text' value={city} onChange={e=> setCity(e.target.value)}></input>
                                    </div>

                                    <div className="sInputContainer">
                                        <img alt='pCode' src='/img/pCode.png' />
                                        <input required placeholder='Postal code' id="pCode" type='text' value={pCode} onChange={e=> setPCode(e.target.value)}></input>
                                    </div>

                                    <div className="sInputContainer">
                                        <img alt='address' src='/img/address.png' />
                                        <input required placeholder='Address' id='address' type="text" value={address} onChange={e=> setAddress(e.target.value)} />
                                    </div>

                                </div>
                                <div className="subTotal">
                                    <div className="stUpper">
                                        <h1>Total: </h1>
                                        <h1>$ {total().toFixed(2)}</h1>
                                    </div>
                                    <div className="stLower">
                                        <Link to='/cart'>
                                            <button>
                                                Cancel
                                            </button>
                                        </Link>
                                            <button type='submit'>
                                                Place order
                                            </button>
                                    </div>
                                </div>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
            <Navbar
                cart={props.cart}
                favoritesList={props.favoritesList}
                navbarStyle={{backgroundColor: "rgb(13,13,13)"}}
            />
        </>
    )
}

export default Checkout
