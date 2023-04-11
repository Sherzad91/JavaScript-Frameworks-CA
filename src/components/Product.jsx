// create product component with props for image, title, price, and description and add to cart button with onClick event handler and pass in props to the button with discount price

import React from 'react';
import './product.css';
// fi icon star
import { FiStar } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Product = ({ data }) => {
    return (

        <Link className="col-12 col-sm-12 col-md-6 col-lg-4 " to={`/product/${data?.id}`}
        style={{ textDecoration: 'none', color: 'black' }}
        >
            <div id={data?.id} className="card m-4 card-item" >
                <img src={data?.imageUrl} className="card-img-top pr-img" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{data?.title}</h5>
                    <div className="d-flex justify-content-between mb-2">
                        <div className="d-flex">
                            {
                                [1, 2, 3, 4, 5].map((item, index) => (
                                    <FiStar key={index} className={index < data?.rating ? 'text-warning' : 'text-secondary'} />
                                ))

                            }
                        </div>
                    </div>
                    <p className="card-text">{data?.description?.length > 50 ? data?.description?.slice(0, 50) + '...' : data?.description}</p>
                    <p className={data?.discountedPrice === data?.price ? 'card-text d-none' : 'card-text display-6'}>${data?.discountedPrice}</p>
                    <p className={data?.discountedPrice === data?.price ? 'card-text display-6' : 'card-text text-decoration-line-through text-danger'}>${data?.price}</p>
                    <div className="d-flex flex-wrap">
                        {
                            data?.tags?.map((item, index) => (
                                <span key={index} className="badge bg-success me-1">#{item}</span>
                            ))
                        }
                    </div>

                    <p className="card-text mt-2"><small className="text-muted">{data?.reviews.length} reviews</small></p>

                </div>
                <div className="card-footer">
                    <div className='d-flex justify-content-center'>
                        <Link className="nav-link" to={`/product/${data?.id}`}>Detail of product</Link>
                    </div>
                </div>
            </div>
        </Link>

    );
};

export default Product;



