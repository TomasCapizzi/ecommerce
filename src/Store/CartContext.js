import React, {createContext, useState} from 'react';

export const CartContext = createContext();

export function CartContextProvider({children}){
    const [cart, setCart] = useState([]);
    console.log('Carrito:',cart);

    const onAdd = ({detalleProducto})=> {   
        setCart([...cart, detalleProducto]);
    }

    const removeItem = (detalleProducto)=>{
        let itemRemovido = cart.filter(item => item.id !== detalleProducto.id);
        console.log(itemRemovido)
        setCart(itemRemovido)
    }

    const clearCart = ()=> setCart([]);

    return(
        <CartContext.Provider value={{cart, onAdd, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}
