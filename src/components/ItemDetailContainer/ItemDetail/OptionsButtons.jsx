import{Link} from 'react-router-dom';
import React from 'react';

function OptionsButtons({modificarItems}) {
  return (
    <div className='btn-fin-compra' id='btn-fin-compra-container'>
        <div>
        <Link to='/'><button>Continuar Comprando</button></Link>
        <button onClick={modificarItems}>Modificar</button>
        </div>
        <Link to='/cart'><button id='btn-fin'>Finalizar Compra</button></Link>
    </div>
  )
}

export default OptionsButtons