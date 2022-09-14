import React, {useContext, useRef} from 'react';

import { CartContext } from '../../Store/CartContext';
import {Link} from 'react-router-dom';
import { database } from '../../Firebase/productos';
import useGetPaymentFormData from '../../hooks/useGetPaymentFormData';

function Form({setOrden}) {
    const {cart} = useContext(CartContext)
    let ordenID;
    const {checkData} = useGetPaymentFormData({modificarStock, ordenID, setOrden});

    const emailRef = useRef();
    const nombreRef = useRef();
    const apellidoRef = useRef();
    const dniRef = useRef();
    const direccionRef = useRef();
    const localidadRef = useRef();
    const provinciaRef = useRef();

    const getFormData = (e)=> {
        e.preventDefault();
        const datosComprador = {
            email: emailRef.current.value,
            nombre: nombreRef.current.value,
            apellido: apellidoRef.current.value,
            dni: dniRef.current.value,
            direccion: direccionRef.current.value,
            localidad: localidadRef.current.value,
            provincia: provinciaRef.current.value
        }
        checkData(datosComprador);
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

  return (
    <form action="" id='form'>
        <h4>Dirección de envío</h4>
        <label>Correo Electrónico</label>
        <input type="text"  ref={emailRef}/>
        <div className='form-datos-personales'>
            <h4>Tus datos</h4>
            <label>Nombre</label>
            <input type="text" ref={nombreRef}/>
            <label>Apellido</label>
            <input type="text" ref={apellidoRef} />
            <label>DNI</label>
            <input type="number" ref={dniRef} />
            <label>Dirección</label>
            <input type="text" ref={direccionRef} />
            <label>Localidad</label>
            <input type="text" ref={localidadRef} />
            <label>Provincia</label>
            <select name="provincia" ref={provinciaRef} >
                <option value="Buenos Aires">Bs As</option>
                <option value="Capital">Capital</option>
                <option value="Santa Fe">Santa Fe</option>
                <option value="Entre Ríos">Entre Ríos</option>
            </select>
        </div>
        <Link to='/'><button onClick={getFormData}>Pagar</button></Link>
    </form>
  )
}

export default Form