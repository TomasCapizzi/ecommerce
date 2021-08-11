import React,{useContext, useState} from "react";
import ItemCount from "../../../ItemCount/ItemCount";
import {Link} from 'react-router-dom';  // Usar link para la img?  Link>a>img
import {CartContext} from '../../../../Store/CartContext';

function Item({item}){
    const [contador, setContador] = useState(1);
    const [disableBtn, setDisableBtn] = useState(false);
    const [finCompra, setFinCompra] = useState(false);
    const {onAdd,cart, removeItem} = useContext(CartContext); 

    const {id, estilo, marca, precio, img} = item;
    const detalleProducto = {
     id: id,
     estilo: estilo,
     marca: marca,
     precio: precio,
     img: img,
     cantidad: contador
    }

    const agregarItems = ()=>{ 
        if(verificarItem(detalleProducto)){
          alert(`Este producto ya se encuentra en el carrito`);
          setFinCompra(true);
        } else{
          alert(`Has seleccionado ${contador} ${estilo} de ${marca}`);
        
          onAdd({detalleProducto})
          //setContador(1);
         setFinCompra(true);
        }
        
      }
    
      const modificarItems = ()=> {
        setFinCompra(false);
        removeItem(detalleProducto)
      }
    
      const verificarItem = (detalleProducto)=> {
        console.log('ID',detalleProducto.id)
        let coincidencia = cart.find( item => item.id === detalleProducto.id)
        console.log(coincidencia)
        if(coincidencia !== undefined){
          //checkItem(true);
          console.log('Hay coincidencia')
          return true;
        } else{
          return false;
        }
    }

    return(
        <div className='item'>
            <Link to={'/productos/' + item.id}><img src={item.img} alt="item-imagen" /></Link>
            <h3 className='item-title'>{item.titulo}</h3>
            <h5>{item.sub}</h5>
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
                <div className='btn-fin-compra-item' id='btn-fin-compra-container'>
                  <div>
                  <button onClick={modificarItems}>Modificar</button>
                   <Link to='/cart'><button id='btn-fin'>Finalizar Compra</button></Link>
                  </div>
                  
                </div>
                )
                } 
        </div>
    )
}

export default Item;
