import React,{useState} from 'react';
import ItemCount from "../../ItemCount/ItemCount";
import {IoBeerOutline} from 'react-icons/io5';
import {CartContext} from '../../../Store/CartContext';
import{Link} from 'react-router-dom';


function ItemDetail({item}){
   const [contador, setContador] = useState(1);

   const [disableBtn, setDisableBtn] = useState(false);

   const [finCompra, setFinCompra] = useState(false);

  // const counterBtnAdd = document.getElementById('counter-btnAdd');
  // const btnFin = document.getElementById('btn-fin-compra-container');
   
   const agregarItems = ()=>{ 
    alert(`Has seleccionado ${contador} ${item.sub} de ${item.titulo}`);
    //setContador(1);
   setFinCompra(true);
  }

  const modificarItems = ()=> {
    setFinCompra(false);
    console.log(finCompra);
  }
/*
if(finCompra){
    counterBtnAdd.classList.add('off');
    btnFin.classList.remove('off');
}
*/

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
                { !finCompra ? (
                <div id='counter-btnAdd' className='container-counter-btn'>
                  <div className='item-detail-count'>
                    <ItemCount contador={contador} setContador={setContador} stock={item.stock} disableBtn={disableBtn} setDisableBtn={setDisableBtn} />
                  </div> 
                  <div className='btn-agregarItems-detail'>
                   <button id='btnAgregar' disabled={disableBtn} onClick={agregarItems}>Agregar +</button>
                    <button id='noStock' disabled={!disableBtn}>Sin Stock</button>
                  </div> 
                 </div> 
                ) : (
                <div className='btn-fin-compra' id='btn-fin-compra-container'>
                  <div>
                  <Link to='/'><button>Continuar Comprando</button></Link>
                  <button onClick={modificarItems}>Modificar</button>
                  </div>
                  <Link to='/cart'><button id='btn-fin'>Finalizar Compra</button></Link>
                </div>
                )


                }   
                
                              
            </div>
            
        </div>
    )
}

export default ItemDetail;