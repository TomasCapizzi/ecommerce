import { CartContext } from "../Store/CartContext";
import { database } from '../Firebase/productos';
import { useContext } from "react";

const useGetPaymentFormData = ({modificarStock, ordenID, setOrden}) => {
    const {cart, costoTotal, clearCart} = useContext(CartContext);
    function checkData(datosComprador){
        if(validarForm(datosComprador)){
            const nuevaCompra = {
                datos: datosComprador,
                carta: cart,
                fecha: new Date().toString(),
                total: costoTotal
            }
            const coleccionOrdenes =  database.collection('compras');
           modificarStock();
    
            coleccionOrdenes.add(nuevaCompra).then((res) => {
                ordenID = res.id
                setOrden(ordenID)
                modificarStock();
            }).catch((error)=>{
                alert('Error: ' + error);
            })
            clearCart();
        
        } else{
            alert('Faltan campos por completar')
        }       
    }

    function validarForm(datos){
        const {email, nombre, apellido, dni, direccion, localidad, provincia} = datos

        if(email === '' || nombre === '' || apellido === '' || dni === '' || direccion === '' || localidad === '' || provincia === ''){
            return false;
        } else{
            return true;
        }
    }
  return {
    checkData,
  }
}

export default useGetPaymentFormData