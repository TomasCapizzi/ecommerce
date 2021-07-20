import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {Link} from 'react-router-dom'

function Carrito(){
    return(
        <Link to='/cart'><button className="carrito-btn"><AiOutlineShoppingCart /></button></Link>
    )
}

export default Carrito;