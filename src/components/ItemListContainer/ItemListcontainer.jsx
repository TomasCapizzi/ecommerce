import React, {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';

function ItemListContainer(props){
    const stockMinimo = 1;
    const stockMaximo = 6;
    return(
        <div className="contenedor-items">
            <h2>{props.greetings}</h2>
            <ItemCount stockMinimo={stockMinimo} stockMaximo={stockMaximo} />
        </div>
    );
}

export default ItemListContainer;
