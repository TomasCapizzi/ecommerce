import React from 'react';
import Carrito from '../Carrito/Carrito';
import {IoBeerOutline} from 'react-icons/io5';

function Navbar(props){
    console.log(props)
    return (
        <nav className="navbar">
            <h1>{props.nombreTienda} <IoBeerOutline /></h1>
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