import React, {useContext} from "react";
import { CartContext } from "../../Store/CartContext";
import CartItem from "./CartItem";
import {Link} from 'react-router-dom';


export default function Cart(){
    
    const {cart, clearCart, costoTotal} = useContext(CartContext);
    const costo = cart.map(item => item.precio * item.cantidad);
    let totalCosto = 0;
    for(let i=0; i<costo.length;i++){
        totalCosto = costo[i] + totalCosto
    }
// Otra mandera de hacerlo utilizando Reduce
/*
    const CostoTotal = cart.reduce((acc,{cantidad,precio}) => {
        return acc = acc + (precio*cantidad);
    },0);
*/

    return (
        <div className='cart-container'>
            {
                cart.length > 0 ?
                <div className='cart-full'>
                    <h2>Tienes {cart.length} productos en tu carrito</h2>
                    <div className='cart-item-container'>
                        {cart.map(item => <CartItem item={item} key={item.id}/> )}                        
                    </div>
                    <h3 className='cart-total'>Total: ${costoTotal} </h3>
                    <div className='btn-container'>
                        <Link to='/fin-compra'><button>Finalizar Compra</button></Link>
                        <button className='clear-cart' onClick={clearCart}>Borrar Carrito</button>
                    </div>

                </div> :
                <div className='cart-vacio'>
                    <h2>Tu carrito esta vacio</h2>
                    <Link to='/'><button>Volver</button></Link>
                </div>
                
            }
        </div>
    )
}