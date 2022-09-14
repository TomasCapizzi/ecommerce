import {Link} from 'react-router-dom';
import React from 'react';

function CartButtons({clearCart}) {
  return (
    <div className='btn-container'>
        <Link to='/fin-compra'><button>Finalizar Compra</button></Link>
        <button className='clear-cart' onClick={clearCart}>Borrar Carrito</button>
    </div>
  )
}

export default CartButtons