import {Link} from 'react-router-dom';
import React from 'react';

function CartEmpty() {
  return (
    <div className='cart-vacio'>
        <h2>Tu carrito esta vacio</h2>
        <Link to='/'><button>Volver</button></Link>
    </div>
  )
}

export default CartEmpty