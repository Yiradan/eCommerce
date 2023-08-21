import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function Product(props){

    const  {id}  = useParams();

    const [imagesLength, setImagesLength] = useState(0)
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/shop/products/'+id)
        .then(res => {
            setProducts(prev => res.data)
            setImagesLength(prev => res.data[0].images.split(' ').length)
        })
    }, [id])

    const [imagePos, setImagePos] = useState(0);
    const iPosInc = () => {
        if(imagePos < imagesLength-1) setImagePos(imagePos + 1)
    }
    const  iPosDec = () => {
        if(imagePos > 0) setImagePos(imagePos - 1)
    }

    const favoritesAdded = (item) => toast.success(
        <p>Product <strong>{item}</strong> was added to favorites!</p>,{
        className: 'toast-message'
    })
    const favoritesDeleted = (item) => toast.warning(
        <p>Product <strong>{item}</strong> was removed from favorites!</p>,{
        className: 'toast-message'
    })

    const productAdded = (item) => toast.success(
        <p>Product <strong>{item}</strong> was added to the shopping cart!</p>,{
            className: 'toast-message'
        }
    )

    const productLimitReached = (item) => toast.warning(
        <p>There is no more left of this product: <strong>{item}</strong>.</p>,{
            className: 'toast-message'
        }
    )

    const toggleFavorites = (id) => {
        if(props.favoritesList.some(item => item.id === id)) {
            props.setFavoritesList(prev => prev.filter(item => item.id !== id))
            favoritesDeleted(products[0].productName)
        }
        else {
            props.setFavoritesList(prev => [...prev, products[0]])
            favoritesAdded(products[0].productName)
        }
    }

    function addProduct(id){
        if(!props.cart.length || props.cart.every(x => x.id !== id)){
            productAdded(products[0].productName)
            props.setCart(prev => [...prev, {...products[0], quantity: 1, images: products[0].images.split(' ')[0]}])
        }
        else if(props.cart.length && products[0].quantity > props.cart.filter(x => x.id === id)[0].quantity){
            productAdded(products[0].productName)
            props.setCart(prev => prev.map(item => {
                return item.id === id ? {...item, quantity: item.quantity+1} : item
            }))
        }
        else productLimitReached(products[0].productName)
    }
    
    console.log(props.cart)
   

    return (
        products.map((x,index)=>{
            return (
                <div key={index} className="product">
                <div className="details">
                <div className="arrows">
                        <img onClick={iPosDec} style={{opacity: imagePos === 0 ? "0.1" : ""}} alt='arrowUp' src='/img/arrowUp.png' />
                        <img onClick={iPosInc} style={{opacity: imagePos === imagesLength-1 ? ".1" : ""}} alt='arrowDown' src='/img/arrowDown.png' />
                </div>
                <div className="products-left" style={{transform: `translateY(-${imagePos}00%)`, transition: ".7s"}}>
                    {x.images.split(' ').map((image,i)=>{
                        return <img alt='productImage' src={image} key={i} />
                    })}
                </div>
                <div className="products-right">
                    <div className="productsNavbar">
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
                    <div className="product-details">
                        <div className="pdUpper">
                            <h1 style={{fontSize: "40px"}}>{x.brand}</h1>
                            <h2 style={{color: "gray", fontSize: "30px"}}>{x.description}</h2>
                            <h2 style={{fontSize: "30px"}}>$ {x.price}</h2>
                        </div>
                        <div className="pdLower">
                            <div className='addToButtons addToCart' onClick={()=> addProduct(x.id)}>Add to cart</div>
                            <div onClick={()=> toggleFavorites(x.id)} className='addToButtons addToFavoritess'>{props.favoritesList.length > 0 && props.favoritesList.some(item => item.id === x.id) ? 'Remove from favorites' : 'Add to favorites'}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            )
        })
    )
}