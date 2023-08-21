import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function EditProduct(){

    const inputArr = [{value: "" }];
    const {id} = useParams()
    const [brand, setBrand] = useState('')
    const [productName, setProductName] = useState('')
    const [description, setDescription] = useState('')
    const [images, setImages] = useState(inputArr)
    const [quantity, setQuantity] = useState('')
    const [price, setPrice] = useState('')
    const [tags, setTags] = useState('')

    useEffect(()=> {
        axios.get("http://localhost:8080/admin/products/edit/"+id)
        .then(res => {
            const data = res.data[0]
            setBrand(data.brand)
            setProductName(data.productName)
            setDescription(data.description)
            setImages(data.images.split(' ').map(x=> x = {value: x}))
            setQuantity(data.quantity)
            setPrice(data.price)
            setTags(data.tags)
        })
    }, [id])

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

    const submitEditProduct = e => {
        e.preventDefault()
        const image = images.map(x=> x = x.value).join(' ').trim()
        axios.put('http://localhost:8080/admin/products/edit/'+id, {
        id: id,
        brand: brand,
        productName: productName,
        description: description,
        images: image,
        quantity: quantity,
        price: price,
        tags: tags
        }).then((data) => {
        alert('The product was succesfully edited in the DataBase!')
        window.location.reload()
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

                    <div  className="adminLeftLink">
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
                        <Link to='/shop'>
                            <img alt='addProduct' src='/img/store.png' />
                            <h4>Back to the shop</h4>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="adminRight">
                <div className="adminRightContent">
                        <form onSubmit={submitEditProduct}>
                            <div className="rightUpper">
                                <h3>Edit product #{id}</h3>
                                <img style={{width: "70px"}} alt='productImage' src={images[0].value} />
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
                                <button type='submit' className='submitButton'>Edit product</button>
                            </div>
                            </div>
                        </form>
            </div>
            </div>
       </div>
    )

}