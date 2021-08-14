import React, {useState, useEffect} from "react";
import Item from './Item/Item';
import Spinner from "../../Spinner/Spinner";
import {database} from '../../../Firebase/productos.js'

function ItemList(){
    const [itemListState, setItemListState] = useState([]);
    const [load, setLoad] = useState(false);

    const obtenerLista = ()=> {
        const listaProductos = database.collection('productos');
        listaProductos.get().then((query) => setItemListState(query.docs.map((doc) => {
            setLoad(true);
            return {...doc.data()}         
        })))       
    }


    useEffect(()=>{
    obtenerLista();
    },[]);

 

return(
 
    <div className='item-list'>
        {load ? itemListState.map(
                item =>  (
                <Item item={item} key={item.id}/>
                )
          ):  <Spinner/> }           
    </div>
 
)
}


export default ItemList;