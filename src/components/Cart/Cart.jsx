import React, {useState,useEffect, useContext} from "react";
import { CartContext } from "../../Store/CartContext";

export default function Cart(){

    const {cart} = useContext(CartContext)
    console.log(cart)
    return (
        <div>El carrito</div>

    )
}