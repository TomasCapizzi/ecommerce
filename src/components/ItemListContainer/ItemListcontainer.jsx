import React from 'react';

function ItemListContainer(props){
    return(
        <div className="contenedor-items">
            <h2>{props.greetings}</h2>
        </div>
    );
}

export default ItemListContainer;
