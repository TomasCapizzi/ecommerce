import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams} from 'react-router';
import {productosList} from '../../../productosList';

export default function ItemDetailList(){
    const { id: idParams }  = useParams();
    console.log(idParams);
    const [productos, setProductos] = useState(productosList);
    const [itemDetailState, setItemDetailState] = useState({});
    const traerItem = (idParams) => {
        const search = productos.find(item => item.id === parseInt(idParams));
        setItemDetailState(search);
    }
    useEffect(()=>{
        traerItem(idParams);
        console.log(itemDetailState);
    },[])

return(
    <div className='item-detail-list-container'>
        <div className='item-detail-list'>
            <ItemDetail item={itemDetailState}/> 
        </div>        
    </div>
);
}