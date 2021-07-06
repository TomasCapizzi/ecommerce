import React from "react";
import ItemCount from "../../../ItemCount/ItemCount";

function Item({item}){
    return(
        <div className='item'>
            <h3>{item.titulo}</h3>
            <h5>{item.sub}</h5>
            <img src={item.img} alt="" />
            <h3>${item.precio}</h3>
            <ItemCount stock={item.stock} titulo={item.titulo} estilo={item.sub}/>
        </div>
    )
}

export default Item;