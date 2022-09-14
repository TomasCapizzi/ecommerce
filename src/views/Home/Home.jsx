import ItemListContainer from '../../components/ItemListContainer/ItemListcontainer';
import React from 'react';

function Home() {
  return (
    <div className='home-container'>
        <img src='https://images.pexels.com/photos/1561145/pexels-photo-1561145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='Portada'></img>
        <ItemListContainer greetings="¡Bienvenido a nuestra Tienda Online!"/>
   </div>
  )
}

export default Home