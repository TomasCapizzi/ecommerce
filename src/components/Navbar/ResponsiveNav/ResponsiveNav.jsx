import CarritoWidget from '../../CarritoWidget/CarritoWidget';
import Links from '../Links/Links';
import React from 'react';
import { TiThMenu } from "react-icons/ti";

function ResponsiveNav({mostrarMenu, menuRef}) {
  return (
    <>
        <div className='hamb-icons'>
            <CarritoWidget/> 
            <button><TiThMenu  onClick={mostrarMenu}/></button>
        </div>
        <div className='hamb-hide' ref={menuRef} >
            <Links />
        </div>
    </>
  )
}

export default ResponsiveNav