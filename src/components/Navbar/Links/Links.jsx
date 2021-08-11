import React from 'react';
import {Link} from 'react-router-dom';

function Links(){
    return <ul>
        <li><Link to='/'>Inicio</Link></li>
        <li><Link to='/productos'>Productos</Link></li>
        <li><Link to='/contacto'>Contacto</Link></li>
    </ul>
}

export default Links;