import React from 'react';
import CarritoWidget from '../CarritoWidget/CarritoWidget';
import {IoBeerOutline} from 'react-icons/io5';
import Links from './Links/Links';
import Buscador from '../Buscador/Buscador';
import { TiThMenu } from "react-icons/ti";
import {Link} from 'react-router-dom'

function Navbar(props){
    const menu = document.getElementById('menuHamb');


    function mostrarMenu(){
        menu.classList.toggle('on');
    }

    return (
        <>
        <nav className="navbar">
            <div className='navbar-logo-item'>
                <Link to='/'><h1>{props.nombreTienda} <IoBeerOutline /></h1></Link>
                <Buscador/>
            </div>
            <div className='nav-links'>
              <Links />
               <CarritoWidget/> 
            </div>
        </nav>
        <div className='menu-hamb'>
                <h1>{props.nombreTienda} <IoBeerOutline /></h1>
                <div className='hamb-icons'>
                 <CarritoWidget/> 
                 <button onClick={mostrarMenu}><TiThMenu/></button>
                </div>
                <div className='hamb-hide' id='menuHamb'>
                  <Links />
                </div>
            </div>
        </>
    );
}
export default Navbar;