import React from 'react'

function Price({item, indice}) {
  return (
    <div>
        <h3>${item[indice].precio}</h3>  
        <h4>Stock: {item[indice].stock}</h4>
    </div>
  )
}

export default Price