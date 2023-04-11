import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);

    const addItem = (item) => {
        // if item already exists in cart, skip
        if (!cartItems.find((i) => i.id === item.id)) {
            setCartItems([...cartItems, item]);
        }
    };

    const removeItem = (index) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
    };

    const isItemInCart = (item) => {
        return cartItems.find((i) => i.id === item.id);
    };

    const getCartLength = () => {
        return cartItems.length;
    };
    // summation of all item price in cart with discount price
    const getCartPriceTotal = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };
    // summation of all item price in cart without discount price
    const getCartPriceDiscountTotal = () => {
        return cartItems.reduce((total, item) => total + item.discountedPrice, 0);
    };

    // remove all items from cart
    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addItem, removeItem, isItemInCart, getCartLength,getCartPriceDiscountTotal,getCartPriceTotal ,clearCart}}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;

