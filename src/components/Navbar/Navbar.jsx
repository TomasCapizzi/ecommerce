import React from 'react';
import Carrito from '../Carrito/Carrito';
import {IoBeerOutline} from 'react-icons/io5';
import Links from './Links/Links';

function Navbar(props){
    console.log(props)
    return (
        <nav className="navbar">
            <h1>{props.nombreTienda} <IoBeerOutline /></h1>
        <div>
            <Links />
            <Carrito/> 
        </div>
        </nav>
    );
}
export default Navbar;