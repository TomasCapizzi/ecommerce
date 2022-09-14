import {Link} from 'react-router-dom';
import React from 'react';

function PayOk({orden}) {
  return (
    <div>
        <h3>¡Pago realizado con éxito!</h3>
        <Link to='/'><button>Volver</button></Link>    
        <p>{'Se generó correctamente tu orden:  ' + orden}</p>
    </div>
  )
}

export default PayOk