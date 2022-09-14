import React,{useContext} from 'react';

import { CartContext } from '../../Store/CartContext';
import CartItem from './CartItem';

function CartList() {
    const {cart} = useContext(CartContext);
  return (
    <div className='cart-item-container'>
        {cart.map(item => <CartItem item={item} key={item.id}/> )}                        
    </div>
  )
}

export default CartList