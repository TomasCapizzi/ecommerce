import { CartContext } from "../Store/CartContext";
import { useContext } from "react";

const useAddToCart = ({setFinCompra,detalleProducto, contador, estilo, marca}) => {

    const {onAdd, cart, removeItem} = useContext(CartContext);


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
        let coincidencia = cart.find( item => item.id === detalleProducto.id)
        if(coincidencia !== undefined){
          //checkItem(true);
          console.log('Hay coincidencia')
          return true;
        } else{
          return false;
        }
      }
  return {
    agregarItems,
    modificarItems,
    verificarItem
  }
}

export default useAddToCart;