import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const saved = localStorage.getItem('grihostho-cart');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('grihostho-cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (item) => {
        setCartItems((prev) => {
            const existing = prev.find((p) => p.id === item.id);

            if (existing) {
                return prev.map((p) =>
                    p.id === item.id
                        ? { ...p, quantity: p.quantity + item.quantity }
                        : p
                );
            }

            return [
                ...prev,
                {
                    ...item,
                    image: item.image || "", // ✅ safety fix
                },
            ];
        });
    };

    const updateQuantity = (id, quantity) => {
        setCartItems((prev) =>
            prev
                .map((item) =>
                    item.id === id
                        ? { ...item, quantity: Math.max(1, quantity) }
                        : item
                )
        );
    };

    const removeFromCart = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const clearCart = () => setCartItems([]);

    const cartCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);

    const cartTotal = cartItems.reduce(
        (sum, i) => sum + i.price * i.quantity,
        0
    );

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
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used inside CartProvider");
    return ctx;
};