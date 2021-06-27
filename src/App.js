import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from './components/ItemListContainer/ItemListcontainer';

function App() {
  return (
    <div className="App">
      <Navbar nombreTienda='Craft-Beer'/>
      <ItemListContainer greetings="¡Bienvenido a nuestra Tienda Online!"/>  
    </div>
  );
}

export default App;
