import React, { useEffect, useContext } from 'react';
import { CartContext } from '../provider/CartProvider';
import { FiCheckCircle } from 'react-icons/fi';

const SuccessPayment = () => {
    const { clearCart } = useContext(CartContext);

    useEffect(() => {
        clearCart();
        setTimeout(() => {
            window.location.href = '/';
        }, 3000);
    }, []);

    return (
        <div className='container'>
            <div className='success-page d-flex justify-content-center flex-wrap' style={
                {
                    height: '70vh',
                    alignItems: 'center'
                }
            } >
                <div className='d-flex justify-content-center flex-column align-items-center'>
                    <FiCheckCircle className='text-success p-1' size={100} />
                    <h1>Payment success</h1>
                    <p>Thank you for your purchase</p>
                    <div className="spinner-border text-success" role="status">
                        <span className="visually-hidden">Loading...</span>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default SuccessPayment;