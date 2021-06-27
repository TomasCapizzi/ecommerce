import React from 'react';
import '../../App.css';
import Carrito from '../carrito/carrito';

function Navbar(props){
    console.log(props)
    return (
        <nav className="navbar">
            <h1>{props.nombreTienda}</h1>
            <ul>
                <li>Inicio</li>
                <li>|</li>
                <li>Productos</li>
                <li>|</li>
                <li>Contacto</li>
            </ul>
            <Carrito/> 
        </nav>
    );
}
export default Navbar;