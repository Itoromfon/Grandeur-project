import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

// export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const savedCart = localStorage.getItem('cartItems');
        if (savedCart) {
            setCartItems(JSON.parse(savedCart));
        }
    }, [cartItems]);

    const addToCart = (item, selectedPackage) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(cartItem => cartItem.id === item.id && cartItem.selectedPackage === selectedPackage);
            if (existingItem) {
                return prevItems.map(cartItem =>
                    cartItem.id === item.id && cartItem.selectedPackage === selectedPackage
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                return [...prevItems, { ...item, selectedPackage, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (itemId, selectedPackage) => {
        setCartItems(prevItems => prevItems.filter(item => !(item.id === itemId && item.selectedPackage === selectedPackage)));
    };

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem('cartItems');
    };

    const increaseQuantity = (itemId, selectedPackage) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === itemId && item.selectedPackage === selectedPackage
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const decreaseQuantity = (itemId, selectedPackage) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === itemId && item.selectedPackage === selectedPackage && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const getCartItem = (itemId, selectedPackage) => {
        return cartItems.find(item => item.id === itemId && item.selectedPackage === selectedPackage);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity, getCartItem }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('useCart must be used within a CartsProvider')
    }
    return context
}
