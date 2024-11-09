// src/pages/Cart.jsx
import React from 'react';
import { useAppContext } from '../context/AppContext';

const Cart = () => {
    const { cartItems, totalAmount, removeFromCart, clearCart } = useAppContext();

    const handleRemove = (productId) => {
        removeFromCart(productId);
    };

    const handleClearCart = () => {
        clearCart();
    };

    return (
        <div>
            <h2>Carrito de Compras</h2>
            <div>
                {cartItems.length === 0 ? (
                    <p>No hay productos en el carrito</p>
                ) : (
                    cartItems.map((item) => (
                        <div key={item.id}>
                            <h4>{item.name}</h4>
                            <p>${item.price}</p>
                            <button onClick={() => handleRemove(item.id)}>Eliminar</button>
                        </div>
                    ))
                )}
            </div>
            <div>
                <h4>Total: ${totalAmount}</h4>
                <button onClick={handleClearCart}>Vaciar Carrito</button>
            </div>
        </div>
    );
};

export default Cart;
