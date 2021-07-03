import React, {useState} from 'react';
import {BsPlusCircleFill} from 'react-icons/bs';
import {FaMinusCircle} from 'react-icons/fa';


function ItemCount({stockMinimo, stockMaximo}){

    const [contador, setContador] = useState(1);
    const sumarContador =()=>{
        if(contador < stockMaximo && stockMaximo != 0){
            setContador(contador+1);
        } 
    }
    const restarContador =()=>{
        if(contador> stockMinimo){
            setContador(contador-1);
            
        }
    }

    const agregarItems = ()=>{ 
        alert(`Has seleccionado ${contador} cervezas`);
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