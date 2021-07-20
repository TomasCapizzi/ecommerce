import React,{useState} from "react";
import ItemCount from "../../../ItemCount/ItemCount";
import {Link} from 'react-router-dom';  // Usar link para la img?  Link>a>img

function Item({item}){
    const [contador, setContador] = useState(1);

    const [disableBtn, setDisableBtn] = useState(false)
    const agregarItems = ()=>{ 
        alert(`Has seleccionado ${contador} ${item.sub} de ${item.titulo}`);
        //setContador(1);
    }

    return(
        <div className='item'>
            <Link to={'/productos/' + item.id}><a><img src={item.img} alt="item-imagen" /></a></Link>
            <h3 className='item-title'>{item.titulo}</h3>
            <h5>{item.sub}</h5>
            <h3>${item.precio}</h3>
            <ItemCount contador={contador} setContador={setContador} stock={item.stock} disableBtn={disableBtn} setDisableBtn={setDisableBtn}/>
            <div className='btn-agregarItems'>
                  <button id='btnAgregar' disabled={disableBtn} onClick={agregarItems}>Agregar +</button>
                  <button id='noStock' disabled={!disableBtn}>Sin Stock</button>
            </div> 
        </div>
    )
}

export default Item;