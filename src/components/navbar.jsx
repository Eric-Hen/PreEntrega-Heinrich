import React from 'react';
import { CartWidget } from './cartwidget';

export const NavBar = ({ cartCount }) => {
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
                            <CartWidget cartCount={cartCount} />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};