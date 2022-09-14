import React, {useEffect, useState} from "react";

import ItemDetail from "../../components/ItemDetailContainer/ItemDetail/ItemDetail";
import Spinner from "../../components/Spinner/Spinner";
import useFetchDatabase from "../../hooks/useFetchDatabase";
import {useParams} from 'react-router';

export default function ItemDetailList(){
    const { id: idParams }  = useParams();
    const [itemDetailState, setItemDetailState] = useState([]);
    const [load, setLoad] = useState(false);
    const {obtenerItem} = useFetchDatabase({setItemDetailState, setLoad});

    useEffect(()=>{
        return obtenerItem();   
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

return(    
    <div className='item-detail-list-container'>
        { load? 
            <div className='item-detail-list'>
                <ItemDetail item={itemDetailState} indice={parseInt(idParams)-1} /> 
            </div> :      
            <Spinner/>
        }
    </div>
);
}