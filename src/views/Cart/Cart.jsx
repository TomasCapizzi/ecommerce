import React, {useContext} from "react";

import { CartContext } from "../../Store/CartContext";
import CartEmpty from "../../components/Cart/CartEmpty";
import CartFull from "../../components/Cart/CartFull";

export default function Cart(){
    
    const {cart} = useContext(CartContext);
    const costo = cart.map(item => item.precio * item.cantidad);
    let totalCosto = 0;
    for(let i=0; i<costo.length;i++){
        totalCosto = costo[i] + totalCosto
    }
/* Otra mandera de hacerlo utilizando Reduce
    const CostoTotal = cart.reduce((acc,{cantidad,precio}) => {
        return acc = acc + (precio*cantidad);
    },0);
*/
    return (
        <div className='cart-container'>
            {
                cart.length > 0 ?
                    <CartFull/> : <CartEmpty/>                
            }
        </div>
    )
}