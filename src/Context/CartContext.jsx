import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('grihostho-cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('grihostho-cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (item) => {
        setCartItems((currentItems) => {
            const existingItem = currentItems.find((cartItem) => cartItem.id === item.id);

            if (existingItem) {
                return currentItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                        : cartItem
                );
            }

            return [...currentItems, item];
        });
    };

    const updateQuantity = (id, quantity) => {
        setCartItems((currentItems) =>
            currentItems
                .map((item) => (item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item))
                .filter((item) => item.quantity > 0)
        );
    };

    const removeFromCart = (id) => {
        setCartItems((currentItems) => currentItems.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const value = useMemo(
        () => ({
            cartItems,
            cartCount,
            cartTotal,
            addToCart,
            updateQuantity,
            removeFromCart,
            clearCart,
        }),
        [cartItems, cartCount, cartTotal]
    );

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('useCart must be used inside CartProvider');
    }

    return context;
};
