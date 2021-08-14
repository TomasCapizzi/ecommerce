import React, {useContext} from 'react';
import {RiDeleteBin6Fill} from "react-icons/ri";
import { CartContext } from '../../Store/CartContext';

export default function CartItem({item}){
    
    const {removeItem} = useContext(CartContext);
    function deleteItem(){
        removeItem(item);
    }
    return <div className='cart-item'>
        <img src={item.img} alt="" />
        <h3>{item.marca}</h3>
        <h3>{item.estilo}</h3>
        <h5>{item.cantidad}</h5>
        <h5>${item.precio}</h5>
        <h5>Total: ${(item.precio)*(item.cantidad)} </h5>
        <button onClick={deleteItem}><i><RiDeleteBin6Fill/></i></button>

    </div>
}