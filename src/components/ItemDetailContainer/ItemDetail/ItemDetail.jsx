import React from 'react';
import ItemCount from "../../ItemCount/ItemCount";
import {IoBeerOutline} from 'react-icons/io5';
//import {useParams} from 'react-router-dom';


function ItemDetail({item}){
  // const { id }  = useParams();
   //console.log(item[id])
    return(
        <div className='item-detail'>
            <div className='item-detail-img-container'>
              <img src={item.img} alt="" />
            </div>
            <div className='item-detail-description'>                
                <div className='item-detail-title'>
                  <h3>{item.titulo}</h3>
                  <p>~</p>
                  <h5>{item.sub}</h5>
                  <p><IoBeerOutline/></p>
                </div>
                  <h3>${item.precio}</h3>                
                <div className='item-detail-count'>
                  <ItemCount stock={item.stock} titulo={item.titulo} estilo={item.sub}/>
                </div>
                
            </div>

        </div>
    )
}

export default ItemDetail;