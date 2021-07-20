import React from 'react';
import Carrito from '../Carrito/Carrito';
import {IoBeerOutline} from 'react-icons/io5';
import Links from './Links/Links';
//import {Link} from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';

function Navbar(props){
    console.log(props)
    return (
        <nav className="navbar">
            <div className='navbar-logo-item'>
                <h1>{props.nombreTienda} <IoBeerOutline /></h1>
                <div>
                    <input type="text" placeholder='Estoy buscando...' /><BsSearch className='navbar-btn-search'/>
                </div>
            </div>
        <div>
            <Links />
            <Carrito/> 
        </div>
        </nav>
    );
}
export default Navbar;