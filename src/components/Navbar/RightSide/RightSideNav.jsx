import CarritoWidget from '../../CarritoWidget/CarritoWidget';
import Links from '../Links/Links';
import React from 'react';

function RightSideNav() {
  return (
    <div className='nav-links'>
        <Links />
        <CarritoWidget/> 
    </div>
  )
}

export default RightSideNav