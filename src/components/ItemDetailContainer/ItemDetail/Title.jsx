import {IoBeerOutline} from 'react-icons/io5';
import React from 'react';

function Title({item, indice}) {
  return (
    <div className='item-detail-title'>
        <h3>{item[indice].marca}</h3>
        <p>~</p>
        <h5>{item[indice].estilo}</h5>
        <p><IoBeerOutline/></p>
    </div>
  )
}

export default Title