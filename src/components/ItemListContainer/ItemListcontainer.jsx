import React, {useContext} from 'react';
import { CartContext } from '../../Store/CartContext';
import ItemList from './ItemList/ItemList';

function ItemListContainer(props){

    return(
        <div className="contenedor-items">
            <h2>{props.greetings}</h2>
            <ItemList/>            
        </div>
    );
}

export default ItemListContainer;
