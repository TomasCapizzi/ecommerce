import React, {useContext} from 'react';

import CartButtons from './CartButtons';
import { CartContext } from '../../Store/CartContext';
import CartList from './CartList';

function CartFull() {
    const {cart, clearCart, costoTotal} = useContext(CartContext);
  return (
    <div className='cart-full'>
        <h2>Tienes {cart.length} productos en tu carrito</h2>
        <CartList/>
        <h3 className='cart-total'>Total: ${costoTotal} </h3>
        <CartButtons clearCart={clearCart} />
    </div> 
  )
}

export default CartFull