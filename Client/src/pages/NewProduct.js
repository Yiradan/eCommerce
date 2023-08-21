import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function NewProduct(){

    const url = window.location.href

    const inputArr = [{value: "" }];

    const [brand, setBrand] = useState('')
    const [productName, setProductName] = useState('')
    const [description, setDescription] = useState('')
    const [images, setImages] = useState(inputArr)
    const [quantity, setQuantity] = useState(1)
    const [price, setPrice] = useState(0)
    const [tags, setTags] = useState('')
    
    
      const addInput = () => {
        setImages(s => {
          return [
            ...s,
            {
              value: ""
            }
          ];
        });
      };
    
      const handleChange = e => {
        e.preventDefault();
    
        const index = e.target.id;
        setImages(s => {
          const imageValue = s.slice();
          imageValue[index].value = e.target.value;
          return imageValue;
        });
      };


    


    const submitNewProduct = e => {
        e.preventDefault()
        const image = images.map(x=> x = x.value).join(' ').trim()
        axios.post('http://localhost:8080/admin/add-product', {
        brand: brand,
        productName: productName,
        description: description,
        images: image,
        quantity: quantity,
        price: price,
        tags: tags
        }).then((data) => {
        alert('The product was succesfully added to the DataBase!')
        setBrand('')
        setProductName('')
        setDescription('')
        setImages(inputArr)
        setQuantity(1)
        setPrice(0)
        setTags('')
        })
    }

    function deleteImage(id){
        setImages(prev => prev.filter((x,n)=> n!==id))
    }

    

    return (
        <div className="admin">
            <div className="adminLeft">
                <div className="adminLeftLinks">
                    <div className="adminLeftLink">
                        <Link to='/admin'>
                            <img alt='addProduct' src='/img/home.png' />
                            <h4>Home</h4>
                        </Link>
                    </div>

                    <div style={url.endsWith('add-product') ? {background:  "rgb(0, 42, 147)", borderRadius: "20px"} : {background: "transparent"} } className="adminLeftLink">
                        <Link to='/admin/products/add-product'>
                            <img alt='addProduct' src='/img/addProduct.png' />
                            <h4>Add product</h4>
                        </Link>
                    </div>

                    <div className="adminLeftLink">
                        <Link to='/admin/products'>
                            <img alt='addProduct' src='/img/product.png' />
                            <h4>View products</h4>
                        </Link>
                    </div>

                    <div className="adminLeftLink">
                        <Link to='/admin/orders'>
                            <img alt='addProduct' src='/img/order.png' />
                            <h4>View orders</h4>
                        </Link>
                    </div>

                    <div className="adminLeftLink">
                        <Link to='/shop'>
                            <img alt='addProduct' src='/img/store.png' />
                            <h4>Back to the shop</h4>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="adminRight">
                <div className="adminRightContent">
                        <form onSubmit={submitNewProduct}>
                            <div className="rightUpper">
                                <h3>Add product</h3>
                            </div>
                            <div className='submit'>
                            <br></br>
                            <div className="inputGridContainer">
                                <div className="inputContainer">
                                    <label htmlFor="brand">Brand</label>
                                    <input key='brand' required  id="brand" type='text' value={brand} onChange={e=> setBrand(e.target.value)}></input>
                                </div>

                                <div className="inputContainer">
                                    <label htmlFor="productName">Product name</label>
                                    <input key='productName' required  id="productName" type='text' value={productName} onChange={e=> setProductName(e.target.value)}></input>
                                </div>
                                
                                <div className="inputContainer">
                                    <label htmlFor="description">Description</label>
                                    <input required key='description' id="description" type='text' value={description} onChange={e=> setDescription(e.target.value)}></input>
                                </div>
                                <div className="inputContainer">
                                <label htmlFor="quantity">Quantity</label>
                                <input required key='quantity' min={1} id="quantity" type='number' value={quantity} onChange={e=> setQuantity(e.target.value)}></input>
                            </div>
                            
                            <div className="inputContainer">
                                <label htmlFor="price">Price</label>
                                <input required key='price' id="price" type='number' value={price} onChange={e=> setPrice(e.target.value)}></input>
                            </div>

                            <div className="inputContainer">
                                <label htmlFor="tags">Tags</label>
                                <input required id="tags" key='tags' type='text' value={tags} onChange={e=> setTags(e.target.value)}></input>
                            </div>
                            </div>
                            
                            
                            <div className="inputContainer">
                                <div className="inputImageContainer">
                                    <p>Images</p>
                                    <div className="addImage" onClick={addInput} >Add image +</div>
                                </div>
                                {images.map((x, i) =>{
                                    return (
                                        <div key={i} className={i > 0 ? "deleteImage" : ""}>
                                            <input
                                                key={i}
                                                onChange={handleChange}
                                                value={x.value}
                                                id={i}
                                                type="text"
                                            ></input>
                                            {i > 0 ? <div className="imageX" onClick={()=> deleteImage(i)} >✖</div> : <></>}
                                        </div>
                                    )
                                })}
                            </div>
                            
                            <div className="submit-product">
                                <button type='submit' className='submitButton'>Submit product</button>
                            </div>
                            </div>
                        </form>
            </div>
            </div>
       </div>
    )
}