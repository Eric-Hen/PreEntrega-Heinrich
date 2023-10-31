import React, { useState } from 'react';
import { NavBar } from './navbar';
import { ItemListContainer } from './itemListContainer';

export const ListGames = () => {
    const [cartCount, setCartCount] = useState(0);

    const handleAddToCart = () => {
        //  añadir un producto al carrito
      
        setCartCount(cartCount + 1);
    };

    const handleResetCart = () => {
        //  reiniciar el carrito
        setCartCount(0);
    };

    const juegos = [
        { id: 1, nombre: 'Residen evil', precio: 29.99 },
        { id: 2, nombre: 'Grand Thef Auto', precio: 39.99 },
        { id: 3, nombre: 'Alien Insolation', precio: 19.99 },
        // ... la idea es agregar mas ...
    ];

    return (
        <>
            <NavBar cartCount={cartCount} />
            <h1>Catálogo de Juegos</h1>
            <ul>
                {juegos.map((juego) => (
                    <li key={juego.id}>
                        {juego.nombre} - ${juego.precio}
                        <button onClick={handleAddToCart}>Comprar</button>
                    </li>
                ))}
            </ul>
            <button onClick={handleResetCart}>Reiniciar Carrito</button>
        </>
    );
};