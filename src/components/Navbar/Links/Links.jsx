import React from 'react';
import {Link} from 'react-router-dom';

function Links(){
    return <ul>
        <li><Link to='/'><a>Inicio</a></Link></li>
        <li><Link to='/productos'><a>Productos</a></Link></li>
        <li><Link to='/contacto'><a>Contacto</a></Link></li>
    </ul>
}

export default Links;