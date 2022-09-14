import {Link} from 'react-router-dom';
import React from 'react';

function OptionsButtons({modificarItems}) {
  return (
    <div className='btn-fin-compra-item' id='btn-fin-compra-container'>
        <div>
            <button onClick={modificarItems}>Modificar</button>
            <Link to='/cart'><button id='btn-fin'>Finalizar Compra</button></Link>
        </div>    
    </div>
  )
}

export default OptionsButtons