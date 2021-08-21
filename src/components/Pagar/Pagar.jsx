import React,{useState,useContext} from 'react';
import { database } from '../../Firebase/productos';
import { CartContext } from '../../Store/CartContext';
import {Link} from 'react-router-dom';

export default function Pagar(){
    const {cart, costoTotal, clearCart} = useContext(CartContext)
// eslint-disable-next-line
    let ordenID;
    const [orden, setOrden] = useState('')
    function getFormData(e){
        e.preventDefault();
        const datosComprador = {
            email: document.getElementById('email').value,
            nombre: document.getElementById('nombre').value,
            apellido: document.getElementById('apellido').value,
            dni: document.getElementById('dni').value,
            direccion: document.getElementById('direccion').value,
            localidad: document.getElementById('localidad').value,
            provincia: document.getElementById('provincia').value
        }

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

    async function modificarStock(){
        const coleccionProductos = await database.collection('productos');
        cart.map((item) => {
            const decremento = item.cantidad;
            const stockItem = coleccionProductos.doc(item.producto);
            const stockAnterior = item.stock;
            return stockItem.update({
                stock: stockAnterior - decremento
            });
        })
    }

    function validarForm(datos){
        const {email, nombre, apellido, dni, direccion, localidad, provincia} = datos

        if(email === '' || nombre === '' || apellido === '' || dni === '' || direccion === '' || localidad === '' || provincia === ''){
            return false;
        } else{
            return true;
        }
    }

    return (
    <div className='fin-compra'>
        {cart.length ?
        <form action="" id='form'>
            <h4>Dirección de envío</h4>
            <label>Correo Electrónico</label>
            <input type="text"  id='email'/>
            <div className='form-datos-personales'>
                <h4>Tus datos</h4>
                <label>Nombre</label>
                <input type="text" id='nombre'/>
                <label>Apellido</label>
                <input type="text" id='apellido' />
                <label>DNI</label>
                <input type="number" id='dni' />
                <label>Dirección</label>
                <input type="text" id='direccion' />
                <label>Localidad</label>
                <input type="text" id='localidad' />
                <label>Provincia</label>
                <select name="provincia" id="provincia">
                    <option value="Buenos Aires">Bs As</option>
                    <option value="Capital">Capital</option>
                    <option value="Santa Fe">Santa Fe</option>
                    <option value="Entre Ríos">Entre Ríos</option>
                </select>
            </div>
            <Link to='/'><button onClick={getFormData}>Pagar</button></Link>
        </form>
        : <div>
            <h3>¡Pago realizado con éxito!</h3>
         <Link to='/'><button>Volver</button></Link>    
         <p>{'Se generó correctamente tu orden:  ' + orden}</p>
        </div>}
    </div>)
}