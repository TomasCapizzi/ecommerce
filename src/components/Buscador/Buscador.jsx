//import react, {useState} from 'react'
import {BsSearch} from 'react-icons/bs';
import {Link} from 'react-router-dom';

export default function Buscador(){

    return(
        <div>
            <input type="text" placeholder='Estoy buscando...' id='buscador'/><Link to='/busqueda'><BsSearch className='navbar-btn-search'/></Link>
        </div>
    )
}