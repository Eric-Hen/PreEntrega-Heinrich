import React from 'react';
import cartIcon from '../images/carrito.png';

export const CartWidget = ({ cartCount }) => {
    const cartIconStyle = {
        width: '20px',
        height: '20px',
        marginRight: '5px',
    };

    return (
        <div>
            <img src={cartIcon} alt="Carrito de compras" style={cartIconStyle} />
            <span>Productos en el carrito: {cartCount}</span>
        </div>
    );
};