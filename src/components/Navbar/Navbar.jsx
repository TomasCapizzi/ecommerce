import React from 'react';
import Carrito from '../../components/Carrito/Carrito';
import {IoBeerOutline} from 'react-icons/io5';
import Links from './Links/Links';
//import {Link} from 'react-router-dom';
import Buscador from '../Buscador/Buscador';

function Navbar(props){
    return (
        <nav className="navbar">
            <div className='navbar-logo-item'>
                <h1>{props.nombreTienda} <IoBeerOutline /></h1>
                <Buscador/>
            </div>
        <div>
            <Links />
            <Carrito/> 
        </div>
        </nav>
    );
}
export default Navbar;