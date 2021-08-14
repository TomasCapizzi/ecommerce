import React,{useState, useEffect, useContext} from 'react';
import { database } from '../../Firebase/productos';
import { CartContext } from '../../Store/CartContext';
import {Link} from 'react-router-dom';
import firebase from 'firebase/app';

export default function Pagar(){

    const {cart, costoTotal, clearCart} = useContext(CartContext)

    let ordenID;

    function getFormData(e){
        e.preventDefault()
        const datosComprador = {
            email: document.getElementById('email').value,
            nombre: document.getElementById('nombre').value,
            apellido: document.getElementById('apellido').value,
            dni: document.getElementById('dni').value,
            direccion: document.getElementById('direccion').value,
            localidad: document.getElementById('localidad').value,
            provincia: document.getElementById('provincia').value
        }
        const nuevaCompra = {
            datos: datosComprador,
            carta: cart,
            fecha: new Date().toString(),
            total: costoTotal
        }
        const coleccionProductos =  database.collection('productos');
        const coleccionOrdenes =  database.collection('compras');

        coleccionOrdenes.add(nuevaCompra).then((res) => {
            ordenID = res.id
            cart.map((item) => {
                const decremento = -(item.cantidad);
                const stockItem = coleccionProductos.doc(item.id);
                stockItem.update({
                    stock: firebase.firestore.FieldValue.increment(decremento)
                });
            })
            console.log(ordenID);
        }).catch((error)=>{
            alert('Error: ' + error);
        })
        console.log( 'Esta orden se va a agregar a la colección',nuevaCompra)
        clearCart();        
    }



    useEffect(()=>{
    },[])

    return (
    <div className='fin-compra'>
        {cart.length ?
        <form action="">
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
                </select>
            </div>
            <Link to='/'><button onClick={getFormData}>Pagar</button></Link>
        </form>
        : <div>
            <h3>¡Pago realizado con éxito!</h3>
         <Link to='/'><button>Volver</button></Link>    
        </div>}
    </div>)
}