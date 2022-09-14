import React,{useContext, useState} from 'react';

import { CartContext } from '../../Store/CartContext';
import Form from '../../components/Pay/Form';
import PayOk from '../../components/Pay/PayOk';

export default function Pay(){
    const {cart} = useContext(CartContext)
    const [orden, setOrden] = useState('');

    return (
    <div className='fin-compra'>
        {cart.length ?
            <Form setOrden={setOrden} />
        : <PayOk orden={orden} />
        }
    </div>)
}