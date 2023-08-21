import axios from "axios";
import { React, useLayoutEffect, useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import Navbar from "./Navbar";

export default function Shop(props){

    const [products, setProducts] = useState([])
    const navbarStyle = {backgroundColor: "rgb(13,13,13)"}
    
    const favoritesAdded = (item) => toast.success(
        <p>Product <strong>{item}</strong> was added to favorites!</p>,{
        className: 'toast-message'
    })
    const favoritesDeleted = (item) => toast.warning(
        <p>Product <strong>{item}</strong> was removed from favorites!</p>,{
        className: 'toast-message'
    })

    useLayoutEffect(() => {
        axios.get('http://localhost:8080')
        .then(res => setProducts(prev => res.data))
    }, [])

    const toggleFavorites = (id) => {
        if(props.favoritesList.some(item => item.id ===id)) {
            props.setFavoritesList(prev => prev.filter(item => item.id !== id))
            favoritesDeleted(products[id-1].productName)
        }
        else {
            props.setFavoritesList(prev => [...prev, products[id-1]])
            favoritesAdded(products[id-1].productName)
        }
    }

    const [searchicon, setSearchicon] = useState(false)
    const toggleSearch = () => {
        setSearchicon(prev => !prev)
    }

    const [searchValue, setSearchValue] = useState('')

    

    const [state, setState] = useState({
        query: '',
        list: products
    })

    const search = (event) => {
        if(event.key === 'Enter'){
            const results = products.filter(x=>{
                if(searchValue === '') return products
                return searchValue.trim().toLowerCase().split(' ').some(value =>
                JSON.stringify([x.description.toLowerCase().split(' '),x.brand.toLowerCase(),x.tags.split(' ')]).includes(value))
            })
            setState({
                list: results,
                query: searchValue
            })
        }
    }

    return (
        <>
            <div className="searchEngine">
                <div style={searchicon ? {width: "300px", transition: ".4s", boxShadow: "0 0 15px 1px white", backgroundColor: "white"} : {width: "30px", transition: ".4s"}} className="searchbar">
                    <input
                        onKeyDown={e => search(e)}
                        style={searchicon ? {width: "300px", transition: ".4s", padding: "0 10px", opacity: "1"} : {width: "0px", opacity: "0", padding: "0", transition: ".4s", backgroundColor: "transparent"}} 
                        className="searchbar-input"
                        placeholder="Search..."
                        type="text"
                        onChange={e => setSearchValue(e.target.value)}
                        value={searchValue}></input>
                    <div onClick={toggleSearch} className="searchbar-buttons">
                        <p style={{opacity: searchicon ? "1" : "0", transition: ".4s"}} className="searchbar-exit" >✕</p>
                        <img style={{opacity: searchicon ? "0" : "1", transition: ".4s"}} alt='search-icon' className="search-icon" src="/img/search-icon.png" />
                    </div>
                </div>
            </div>

            {state.list.length === 0 && state.query.length !== 0 &&
                <div className="emptyList">
                    <h1>Oh, crap...</h1>
                    <h2 style={{color: "gray"}}>You've got nothing</h2>
                </div>
            }

            <div className="products">
            {products && (state.query!=='' ? state.list : products).map(x=>{
                return (
                <div key={x.id} className="card">
                    <div className="card-upper">
                    <Link to={`products/${x.id}`}>
                        <LazyLoadImage placeholderSrc='/img/camera.png' delayMethod="debounce" effect="blur" alt={x.description} src={x.images.split(' ')[0]}></LazyLoadImage>
                    </Link>
                        <img
                            onClick={()=> toggleFavorites(x.id)}
                            className="favorites" alt='favorites'
                            src={props.favoritesList.some(item => item.id === x.id) ? '/img/heartFull.png' : '/img/heartEmptyGray.png'}
                        />
                    </div>
                    <div className="card-lower">
                        <div className="cardLowerUpper">
                            <h3>{x.brand}</h3><h3>${x.price}</h3>
                        </div>
                        <h5 style={{color: "white", paddingTop: "10px"}}>{x.description}</h5>
                    </div>
                </div>
                )
            })}
                </div>
        <Navbar
            cart={props.cart}
            navbarStyle={navbarStyle}
            favoritesList={props.favoritesList}
            setFavoritesList={props.setFavoritesList}
        />
        </>
    )
}