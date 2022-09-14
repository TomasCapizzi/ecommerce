import Buscador from '../../Buscador/Buscador';
import {IoBeerOutline} from 'react-icons/io5';
import {Link} from 'react-router-dom';
import React from 'react';

function LeftSideNav({title}) {
  return (
    <div className='navbar-logo-item'>
        <Link to='/'><h1>{title} <IoBeerOutline /></h1></Link>
        <Buscador/>
    </div>
  )
}

export default LeftSideNav