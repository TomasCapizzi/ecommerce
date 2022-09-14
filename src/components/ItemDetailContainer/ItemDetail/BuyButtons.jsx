import ItemCount from '../../ItemCount/ItemCount';
import React from 'react';

function BuyButtons({contador, setContador, item, indice, disableBtn, setDisableBtn, agregarItems}) {
  return (
    <div id='counter-btnAdd' className='container-counter-btn'>
        <div className='item-detail-count'>
            <ItemCount contador={contador} setContador={setContador} stock={item[indice].stock} disableBtn={disableBtn} setDisableBtn={setDisableBtn} />
        </div> 
        <div className='btn-agregarItems-detail'>
            <button id='btnAgregar' disabled={disableBtn} onClick={agregarItems}>Agregar +</button>
            <button id='noStock' disabled={!disableBtn}>Sin Stock</button>
        </div> 
    </div>
  )
}

export default BuyButtons;