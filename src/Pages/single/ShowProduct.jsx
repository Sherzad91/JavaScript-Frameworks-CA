import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './product.css';
import { FiStar } from 'react-icons/fi';
// import from provider folder 
import { CartContext } from '../../provider/CartProvider';


const ShowProduct = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    // useContext(CartContext) context
    const { addItem, isItemInCart, removeItem } = useContext(CartContext);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://api.noroff.dev/api/v1/online-shop/' + id);
            setData(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
            fetchData();

    }, []);

    return (
        <div className="container-fluid mt-2 mb-3">
            <div className="row no-gutters">
                <div className="col-md-5 pr-2">
                    <div className="card">
                        <div >
                            <img className="img-thum" src={data?.imageUrl} />
                        </div>
                    </div>

                </div>
                <div className="col-md-7">
                    <div className="card">
                        <div className="d-flex flex-row align-items-center">
                            <div className="d-flex">
                                {
                                    [1, 2, 3, 4, 5].map((item, index) => (
                                        <FiStar key={index} className={index < data?.rating ? 'text-warning' : 'text-secondary'} />
                                    ))

                                }
                            </div>
                        </div>
                        <div className="about"> <span className="font-weight-bold">{data?.title}</span>
                            <p className={data?.discountedPrice === data?.price ? 'card-text d-none' : 'card-text display-6'}>${data?.discountedPrice}</p>
                            <p className={data?.discountedPrice === data?.price ? 'card-text display-6' : 'card-text text-decoration-line-through text-danger'}>${data?.price}</p>
                        </div>
                        <div className="buttons">
                            <button className="btn btn-outline-warning btn-long cart" onClick={() => addItem(data)}>{isItemInCart(data) ? "Added item" : "Add to cart"}</button>
                        </div>
                        <hr></hr>

                        <div className="product-description">
                            <div className="mt-2"> <span className="font-weight-bold"><h4>Description</h4></span>
                                <p>{data?.description}</p>
                                <div className="d-flex flex-wrap">
                                    {
                                        data?.tags?.map((item, index) => (
                                            <span key={index} className="badge bg-success me-1">#{item}</span>
                                        ))
                                    }
                                </div>
                            </div>
                            {/* here */}
                        </div>

                    </div>
                    <div className="card mt-2">
                        <h4>Reviews</h4>
                        <div className="d-flex flex-row">
                            <div className="stars"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                className="fa fa-star"></i> <i className="fa fa-star"></i> </div> <span
                                    className="ml-1 text-secondary ">Number of review (<span className='text-warning' >{data?.reviews?.length ?? 0}</span>)</span>
                        </div>

                        <hr></hr>

                        <div className="comment-section">
                            {
                                data?.reviews?.map((item, index) => (
                                    <div key={index} >
                                        <div className="d-flex flex-row comment-row">
                                            <div className="comment-text w-100">
                                                <h6 className="font-medium">{item?.username} <span className='rating text-warning'>({item?.rating}) </span><span className='rating text-secondary'>rating</span> </h6>
                                                <span className="m-b-15 d-block"><em>{item?.description}</em></span>

                                            </div>
                                        </div>
                                        {index === data?.reviews?.length - 1 ? null : <hr></hr>}
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowProduct;