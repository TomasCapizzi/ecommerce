import React from 'react'

function Title({item}) {
  return (
    <div>
        <h3 className='item-title'>{item.estilo}</h3>
        <h5>{item.marca}</h5>
        <h3>${item.precio}</h3>
    </div>
  )
}

export default Title