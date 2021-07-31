import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams} from 'react-router';
import Spinner from "../../Spinner/Spinner";
import {database} from '../../../Firebase/productos.js'

export default function ItemDetailList(){

    const { id: idParams }  = useParams();
    const [itemDetailState, setItemDetailState] = useState([]);
    const [load, setLoad] = useState(false);

    async function obtenerLista(){
        const listaProductos = await database.collection('productos');
        const listado = await listaProductos.get();
        setItemDetailState(listado.docs.map((doc) => {return {...doc.data()}}));
        setLoad(true)
    }


    useEffect(()=>{
        obtenerLista();   
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