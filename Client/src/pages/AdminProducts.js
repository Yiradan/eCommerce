import axios from "axios";
import { useEffect, useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from "react-router-dom";

export default function AdminProducts(){

    let url = window.location.href

    const [products, setProducts] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:8080')
        .then(res => setProducts(prev => res.data))
    })

    const submitDeleteProduct = () => {
        axios.delete(`http://localhost:8080/admin/products/delete/${identifier}`)
        .then(data=> {
            alert('Item was deleted!')
            window.location.reload()
        })
    }

    const [deleteProduct, setDeleteProduct] = useState(false)

    function toggleDelete(id){
        setDeleteProduct(prev => !prev)
        setIdentifier(id)
    }

    const [identifier, setIdentifier] = useState(-1)

    const deleteProductPanel = () => {
        return deleteProduct && <div className="grayBackground">
                            <div className="deleteProduct">
                                <div className="deleteProductUpper">
                                    Do you want to delete product: {`#${identifier}`}?
                                </div>
                                <div className="deleteProductLower">
                                    <div className="deleteButtons cancelButtonProducts" onClick={toggleDelete}>Cancel</div>
                                    <div onClick={submitDeleteProduct} className="deleteButtons deleteButtonProducts" >Delete</div>
                                </div>
                            </div>
                        </div>
    }

    return(
        <div className="admin">
            <div className="adminLeft">
                <div className="adminLeftLinks">
                    <div className="adminLeftLink">
                        <Link to='/admin'>
                            <img alt='addProduct' src='/img/home.png' />
                            <h4>Home</h4>
                        </Link>
                    </div>

                    <div className="adminLeftLink">
                        <Link to='/admin/products/add-product'>
                            <img alt='addProduct' src='/img/addProduct.png' />
                            <h4>Add product</h4>
                        </Link>
                    </div>

                    <div style={url.endsWith('products') ? {background:  "rgb(0, 42, 147)", borderRadius: "20px"} : {background: "transparent"} } className="adminLeftLink">
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
                    <div className="table">
                    <div className="tableUpper">
                        <h3>Products</h3>
                    </div>
                        <table>
                            <thead>
                            <tr>
                                    <th>
                                        ID
                                    </th>
                                    <th>
                                        Brand
                                    </th>
                                    <th>
                                        Product name
                                    </th>
                                    <th>
                                        Quantity
                                    </th>
                                    <th>
                                        Price
                                    </th>
                                    <th>
                                        Image
                                    </th>
                                    <th>
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                    {products.map((item,id) => {
                                        return (
                                            <tr key={item.id}>
                                                <td style={{backgroundColor: id % 2 ? "#ebebeb" : "white"}}>
                                                    {item.id}
                                                </td>
                                                <td style={{backgroundColor: id % 2 ? "#ebebeb" : "white"}}>
                                                    {item.brand}
                                                </td>
                                                <td style={{backgroundColor: id % 2 ? "#ebebeb" : "white"}}>
                                                    {item.productName}
                                                </td>
                                                <td style={{backgroundColor: id % 2 ? "#ebebeb" : "white"}}>
                                                    {item.quantity}
                                                </td>
                                                <td style={{backgroundColor: id % 2 ? "#ebebeb" : "white"}}>
                                                    {item.price}
                                                </td>
                                                <td style={{backgroundColor: id % 2 ? "#ebebeb" : "white"}}>
                                                    <LazyLoadImage effect="blur" placeholderSrc="img/camera.png" style={{width: "50px"}} alt="productImage" src={item.images.split(' ')[0]} />
                                                </td>
                                                <td style={{backgroundColor: id % 2 ? "#ebebeb" : "white"}}>
                                                    <Link to={`/admin/products/edit/${item.id}`}><img className="actionButtons" alt='edit' src='/img/edit.png'/></Link>
                                                    <img onClick={()=> toggleDelete(item.id)} className="actionButtons" alt='delete' src='/img/delete.png'/>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                
                                </tbody>
                            </table>
                        <h5> </h5>
                    </div>
                    {deleteProduct && deleteProductPanel()}
            </div>
        </div>
    )
}