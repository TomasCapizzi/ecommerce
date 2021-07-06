import React, {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from './ItemList/ItemList';

function ItemListContainer(props){
    const stockMinimo = 1;
    const stockMaximo = 6;
    return(
        <div className="contenedor-items">
            <h2>{props.greetings}</h2>           
            <ItemList/>
        </div>
    );
}

export default ItemListContainer;
