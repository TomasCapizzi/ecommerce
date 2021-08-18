import React from 'react';
import CarritoWidget from '../CarritoWidget/CarritoWidget';
import {IoBeerOutline} from 'react-icons/io5';
import Links from './Links/Links';
import Buscador from '../Buscador/Buscador';

function Navbar(props){
    return (
        <nav className="navbar">
            <div className='navbar-logo-item'>
                <h1>{props.nombreTienda} <IoBeerOutline /></h1>
                <Buscador/>
            </div>
            <div className='nav-links'>
              <Links />
               <CarritoWidget/> 
            </div>
        </nav>
    );
}
export default Navbar;