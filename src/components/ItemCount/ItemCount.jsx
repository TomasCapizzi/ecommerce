import {BsPlusCircleFill} from 'react-icons/bs';
import {FaMinusCircle} from 'react-icons/fa';
import React from 'react';
import useCounter from '../../hooks/useCounter';

function ItemCount({contador,setContador,stock,disableBtn,setDisableBtn}){

    const {sumarContador, restarContador} = useCounter({contador, stock, setContador});  

    if(stock === 0){
        setDisableBtn(true);
    }

    return(
        <div className='item-counter'>
            <div className='btn-SumaResta'>
                <button className='botones-contador' disabled={contador<=1} onClick={restarContador}><FaMinusCircle /></button>
                    <p>{contador}</p>
                <button  className='botones-contador' disabled={contador === stock} onClick={sumarContador}><BsPlusCircleFill /></button>
            </div>
            
        </div>
    );
}

export default ItemCount;