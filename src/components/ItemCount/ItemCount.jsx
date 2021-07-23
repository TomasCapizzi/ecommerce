import React, {useState} from 'react';
import {BsPlusCircleFill} from 'react-icons/bs';
import {FaMinusCircle} from 'react-icons/fa';


function ItemCount({contador,setContador,stock,disableBtn,setDisableBtn}){
    
    let stockMinimo = true;
    let stockMaximo = false;
  

    contador>1? stockMinimo=false : stockMinimo=true;
    contador === stock ? stockMaximo = true : stockMaximo=false;
    if(stock === 0){
        setDisableBtn(true);
        stockMaximo = true;
    }
    
    const sumarContador =()=>{
        if(contador < stock && stock>=1){
            setContador(contador+1);
        } 
    }
    const restarContador =()=>{
        if(contador<= stock && contador>1){
            setContador(contador-1);            
        }
    }

    return(
        <div className='item-counter'>
            <div className='btn-SumaResta'>
                <button className='botones-contador' disabled={stockMinimo} onClick={restarContador}><FaMinusCircle /></button>
                    <p>{contador}</p>
                <button  className='botones-contador' disabled={stockMaximo} onClick={sumarContador}><BsPlusCircleFill /></button>
            </div>
            
        </div>
    );
}

export default ItemCount;