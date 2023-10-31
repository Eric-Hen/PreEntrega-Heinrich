import React from 'react';
import cartIcon from '../images/carrito.png';

export const NavBar = ({ cartCount }) => {
    const cartIconStyle = {
        width: '20px',
        height: '20px',
        marginRight: '5px',
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">GameXShop</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Juegos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Ofertas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Próximamente</a>
                        </li>
                        <li className="nav-item">
                            <img src={cartIcon} alt="Carrito de compras" style={cartIconStyle} />
                            <span>Productos en el carrito: {cartCount}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};