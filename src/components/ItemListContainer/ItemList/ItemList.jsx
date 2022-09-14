import React, {useEffect, useState} from "react";

import Item from './Item/Item';
import Spinner from "../../Spinner/Spinner";
import useFetchDatabase from "../../../hooks/useFetchDatabase";

function ItemList(){
    const [itemListState, setItemListState] = useState([]);
    const [load, setLoad] = useState(false);
    const {obtenerListado} = useFetchDatabase({setItemListState, setLoad})

    useEffect(()=>{
    obtenerListado();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

return(
 
    <div className='item-list'>
        {load ? 
            itemListState.map(
                item =>  (
                    <Item item={item} key={item.id}/>
                )
            ) : <Spinner/> }           
    </div>
 
)
}


export default ItemList;