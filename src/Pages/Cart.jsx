import React, { useContext } from 'react';
import { CartContext } from '../provider/CartProvider';
import { FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';

const Cart = () => {
    const { cartItems, removeItem, getCartPriceDiscountTotal, getCartPriceTotal, getCartLength } = useContext(CartContext);

    if (getCartLength() < 1) {
        return (
            <div className='container'>
                {/* empty state for cart */}
                <div className="empty-cart d-flex justify-content-center flex-wrap" style={
                    {
                        height: '70vh',
                        alignItems: 'center'
                    }
                } >
                    <div className='d-flex justify-content-center flex-column align-items-center'>
                        <FiShoppingBag className='text-success p-1' size={100} />
                        <h1>Cart is empty</h1>
                        <p>Go to <Link to='/'>products</Link> page to add items to cart</p>
                        

                
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className='container'>
                <h1>Cart</h1>
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                {/* list of added item in to the cart */}
                                <ul className="list-group">
                                    {
                                        cartItems.map((item, index) => (
                                            <li className="list-group-item" key={index}>
                                                <div className="row">
                                                    <div className="col-md-2">
                                                        <img src={item?.imageUrl} height={100} width={100} alt="" />
                                                    </div>
                                                    <div className="col-md-7">
                                                        <p className='text-body'>{item?.title}</p>

                                                        <div className="about">
                                                            <p className={item?.discountedPrice === item?.price ? 'card-text d-none' : 'card-text display-6'}>${item?.discountedPrice}</p>
                                                            <p className={item?.discountedPrice === item?.price ? 'card-text display-6' : 'card-text text-decoration-line-through text-danger'}>${item?.price}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3 d-flex justify-content-end">
                                                        <button className="btn btn-outline-danger btn-long cart" onClick={() => removeItem(item)}>
                                                            <FiTrash2 />
                                                        </button>
                                                    </div>

                                                </div>
                                            </li>
                                        ))

                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" id="name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="text" className="form-control" id="phone" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address">Address</label>
                                    <textarea className="form-control" id="address" rows="3"></textarea>
                                </div>
                                <hr />
                                <h3 className='card-text text-decoration-line-through text-danger'>${getCartPriceTotal().toFixed(2)}</h3>
                                <h1>${getCartPriceDiscountTotal().toFixed(2)}</h1>
                                <hr />
                                <div className='d-flex justify-content-center'>
                                    <Link to={'/success-payment'} className="btn btn-outline-success btn-long cart">Checkout</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

};

export default Cart;