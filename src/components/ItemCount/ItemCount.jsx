import React, {useState} from 'react';
import {BsPlusCircleFill} from 'react-icons/bs';
import {FaMinusCircle} from 'react-icons/fa';


function ItemCount({stock, titulo, estilo}){

    const [contador, setContador] = useState(1);
    const sumarContador =()=>{
        if(contador < stock && stock>=1){
            setContador(contador+1);
        } 
    }
    const restarContador =()=>{
        if(contador< stock && contador>1){
            setContador(contador-1);            
        }
    }

    const agregarItems = ()=>{ 
        alert(`Has seleccionado ${contador} ${titulo} ${estilo}`);
        setContador(1);
    }
    return(
        <div className='item-counter'>
            <div className='btn-SumaResta'>
                <button id='btn-Menos' onClick={restarContador}><FaMinusCircle/></button>
                    <p>{contador}</p>
                <button id='btn-Mas' onClick={sumarContador}><BsPlusCircleFill /></button>
            </div>
            <div className='btn-agregarItems'>
                <button onClick={agregarItems}>Agregar +</button>
            </div>
        </div>
    );
}

export default ItemCount;