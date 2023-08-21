import { Link } from 'react-router-dom'

export default function Admin(){
    
    const url = window.location.href

    return(
       <div className="admin">
            <div className="adminLeft">
                <div className="adminLeftLinks">
                    <div style={url.endsWith('admin') ? {background:  "rgb(0, 42, 147)", borderRadius: "20px"} : {background: "transparent"} } className="adminLeftLink">
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
                    <div className="adminRightTitleUpper" >
                    </div>
                    <div className="adminRightTitleMiddle" >
                        <h1>ADMIN</h1>
                    </div>
                    <div className="adminRightTitleLower" >
                        
                        <Link to='/admin/products/add-product'>
                        <div className="adminLinks">
                            <div className="adminLinksUpper">
                                <img alt='addProduct' src="/img/addProduct.png"/>
                            </div>
                            <div className="adminLinksLower">
                               Add Product
                            </div>
                        </div>
                        </Link>
                        
                        <Link to='/admin/products'>
                        <div className="adminLinks">
                            <div className="adminLinksUpper">
                                <img alt='product' src="/img/product.png"/>
                            </div>
                            <div className="adminLinksLower">
                                View Products
                            </div>
                        </div>
                        </Link>

                        <Link to='/admin/orders'>
                        <div className="adminLinks">
                            <div className="adminLinksUpper">
                                <img alt='product' src="/img/order.png"/>
                            </div>
                            <div className="adminLinksLower">
                                View orders
                            </div>
                        </div>
                        </Link>

                        <Link to='/shop'>
                        <div className="adminLinks">
                            <div className="adminLinksUpper">
                                <img alt='shop' src="/img/store.png"/>
                            </div>
                            <div className="adminLinksLower">
                                Back to the shop
                            </div>
                        </div>
                        </Link>

                    </div>
            </div>
       </div>
    )
}