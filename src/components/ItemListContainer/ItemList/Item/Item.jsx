import React from "react";
import ItemCount from "../../../ItemCount/ItemCount";
import {Link} from 'react-router-dom';  // Usar link para la img?  Link>a>img

function Item({item}){

    return(
        <div className='item'>
            <Link to={'/productos/' + item.id}><a><img src={item.img} alt="item-imagen" /></a></Link>
            <h3 className='item-title'>{item.titulo}</h3>
            <h5>{item.sub}</h5>
            <h3>${item.precio}</h3>
            <ItemCount stock={item.stock} titulo={item.titulo} estilo={item.sub}/>
        </div>
    )
}

export default Item;