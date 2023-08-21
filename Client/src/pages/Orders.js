import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Orders() {

    const url = window.location.href

    const [orders, setOrders] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:8080/admin/orders')
        .then(res => {
            setOrders(prev => res.data)
            setOrders(prev => prev.map(order => {
                return {...order, orders: JSON.parse(order.orders)}
            }))
        })
    })

    return (
        <>
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

                        <div className="adminLeftLink" style={url.endsWith('orders') ? {background:  "rgb(0, 42, 147)", borderRadius: "20px"} : {background: "transparent"} }>
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
                        <h3>Orders</h3>
                    </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        ID
                                    </th>
                                    <th>
                                        Name
                                    </th>
                                    <th>
                                        phNumber
                                    </th>
                                    <th>
                                        E-mail
                                    </th>
                                    <th>
                                        Country
                                    </th>
                                    <th>
                                        Postal Code
                                    </th>
                                    <th>
                                        Address
                                    </th>
                                    <th>
                                        Total
                                    </th>
                                    </tr>
                            </thead>
                                {orders.map((x,index) => {
                                    return (
                                        <tbody className='orderTable' key={index}>
                                            <tr>
                                                <td style={{backgroundColor: index % 2 ? "#ebebeb" : "white"}}>
                                                    {x.order_id}</td>
                                                <td style={{backgroundColor: index % 2 ? "#ebebeb" : "white"}}>
                                                    {x.fName} {x.lName}</td>
                                                <td style={{backgroundColor: index % 2 ? "#ebebeb" : "white"}}>
                                                    {x.phoneNumber}</td>
                                                <td style={{backgroundColor: index % 2 ? "#ebebeb" : "white"}}>
                                                    {x.email}</td>
                                                <td style={{backgroundColor: index % 2 ? "#ebebeb" : "white"}}>
                                                    {x.country}</td>
                                                <td style={{backgroundColor: index % 2 ? "#ebebeb" : "white"}}>
                                                    {x.postalCode}</td>
                                                <td style={{backgroundColor: index % 2 ? "#ebebeb" : "white"}}>
                                                    {x.address}</td>
                                                <td style={{backgroundColor: index % 2 ? "#ebebeb" : "white"}}>
                                                    ${x.total}</td>
                                                
                                            </tr>
                                            <tr>
                                                <td style={{backgroundColor: "bllue", color: "white"}}>
                                                    orderedProducts
                                                </td>
                                                <td  style={{backgroundColor: "bllue", color: "white"}}>
                                                    product_id
                                                </td>
                                                <td style={{backgroundColor: "bllue", color: "white"}}>
                                                    productName
                                                </td>
                                                <td style={{backgroundColor: "bllue", color: "white"}}>
                                                    price
                                                </td>
                                                <td style={{backgroundColor: "bllue", color: "white"}}>
                                                    quantity
                                                </td>
                                                <td style={{backgroundColor: "bllue", color: "white"}}>
                                                    subTotal
                                                </td>
                                            </tr>
                                            {x.orders.map((order,id) =>{
                                                        return (
                                                            <tr key={id}>
                                                                <td style={{backgroundColor: index % 2 ? "#ebebeb" : "white"}}>
                                                                    {id+1}
                                                                </td>

                                                                <td style={{backgroundColor: index % 2 ? "#ebebeb" : "white"}}>
                                                                    {order.product_id}
                                                                </td>
                                                                <td style={{backgroundColor: index % 2 ? "#ebebeb" : "white"}}>
                                                                    {order.productName}
                                                                </td>
                                                                <td style={{backgroundColor: index % 2 ? "#ebebeb" : "white"}}>
                                                                    {order.price}
                                                                </td>
                                                                <td style={{backgroundColor: index % 2 ? "#ebebeb" : "white"}}>
                                                                    {order.quantity}
                                                                </td>
                                                                <td style={{backgroundColor: index % 2 ? "#ebebeb" : "white"}}>
                                                                    ${order.subTotal}
                                                                </td>
                                                                <td style={{backgroundColor: index % 2 ? "#ebebeb" : "white"}}></td>
                                                                <td style={{backgroundColor: index % 2 ? "#ebebeb" : "white"}}></td>
                                                            </tr>
                                                        )
                                                    })}
                                            </tbody>
                                    )
                                })}
                        </table>
                    <h5> </h5>
                </div>
            </div>
            </div>
        </>
    )
}

export default Orders
