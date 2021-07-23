import React,{useContext,useState} from 'react';
import ItemCount from "../../ItemCount/ItemCount";
import {IoBeerOutline} from 'react-icons/io5';
import {CartContext} from '../../../Store/CartContext';
import{Link} from 'react-router-dom';

const ItemDetail = ({item}) => {
   const [contador, setContador] = useState(1);

   const [disableBtn, setDisableBtn] = useState(false);

   const [finCompra, setFinCompra] = useState(false);
   
   const {onAdd,cart, removeItem, checkItem} = useContext(CartContext);   


   const {id, sub, titulo, precio, img} = item;
   const detalleProducto = {
     id: id,
     estilo: sub,
     marca: titulo,
     precio: precio,
     img: img,
     cantidad: contador
   }

   const agregarItems = ()=>{ 
    if(verificarItem(detalleProducto)){
      alert(`Este producto ya se encuentra en el carrito`);
      setFinCompra(true);
    } else{
      alert(`Has seleccionado ${contador} ${sub} de ${titulo}`);
    
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
    if(coincidencia != undefined){
      //checkItem(true);
      console.log('Hay coincidencia')
      return true;
    } else{
      return false;
    }
    


  }


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