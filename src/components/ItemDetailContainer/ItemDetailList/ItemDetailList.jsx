import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams} from 'react-router';
import {productosList} from '../../../productosList';

export default function ItemDetailList(){
    const { id: idParams }  = useParams();
    const [productos, setProductos] = useState(productosList);
    const [itemDetailState, setItemDetailState] = useState({});
    const traerItem = (idParams) => {
        const search = productos.find(item => item.id === parseInt(idParams));
        setTimeout(()=> setItemDetailState(search), 1000);
        
    }
    useEffect(()=>{
        traerItem(idParams);
        console.log(itemDetailState);
    },[idParams]);

return(
    <div className='item-detail-list-container'>
        <div className='item-detail-list'>
            <ItemDetail item={itemDetailState}/> 
        </div>        
    </div>
);
}