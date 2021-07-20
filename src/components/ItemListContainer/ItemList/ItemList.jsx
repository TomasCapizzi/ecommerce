import React, {useState, useEffect} from "react";
import Item from './Item/Item';
import {productosList} from '../../../productosList';

function ItemList(){
    const [itemListState, setItemListState] = useState([]);
    const itemList = productosList;
    
    const obtenerLista = ()=> {
        return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(itemList)
        }, 1500)
    })
}

useEffect(()=>{
    obtenerLista().then((item)=>setItemListState(item))
},[]);

return(
    <div className='item-list'>
        {itemListState.map(
                item =>  (
                <Item item={item} key={item.id}/>
                )
          )}           
    </div>
);
}

export default ItemList;