import React,{useContext} from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {CartContext} from '../../Store/CartContext';

export default function Carrito(){
    const {cart} = useContext(CartContext);
    return(
        <div className='carrito-container'>
            <Link to='/cart'><button className="carrito-btn"><AiOutlineShoppingCart /></button>
            { cart.length > 0 && (
            <div className='cart-widget'><p>{cart.length}</p></div>
        )}</Link>
        </div>
    )
}
