import React from 'react';
import '../../App.css';
import Carrito from '../carrito/carrito';

function Navbar(props){
    console.log(props)
    return (
        <nav className="navbar">
            <h1>{props.nombreTienda} <i class="fas fa-beer"></i></h1>
        <div>
            <ul>
                <li>Inicio</li>
                <li>|</li>
                <li>Productos</li>
                <li>|</li>
                <li>Contacto</li>
            </ul>
            <Carrito/> 
        </div>
        </nav>
    );
}
export default Navbar;