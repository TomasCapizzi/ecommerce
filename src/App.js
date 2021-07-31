import React, {useState,useEffect} from 'react';
import './Styles/main.scss';
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from './components/ItemListContainer/ItemListcontainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ItemDetailList from './components/ItemDetailContainer/ItemDetailList/ItemDetailList';
import Contacto from './components/Contacto/Contacto';
import Productos from './components/Productos/Productos';
import CategoryNav from './components/Navbar/CategoryNav/CategoryNav';
import ItemCategory from './components/ItemListContainer/ItemList/ItemCategory/ItemCategory';
import { CartContextProvider } from './Store/CartContext';
import Cart from './components/Cart/Cart';
import {database} from './Firebase/productos';
import Footer from './components/Footer/Footer'



function App() {

  const [productos, setProductos] = useState([]);

  async function obtenerProductos(){
    const listaProductos = await database.collection('productos');
    const listado = await listaProductos.get();
    setProductos(listado.docs.map((doc) => {return {...doc.data()}}));
}

useEffect(()=>{
  obtenerProductos();
}, []);


  return (
   <CartContextProvider>
    <BrowserRouter>

     <div className="App">
       <div className='nav-container'>
        <Navbar nombreTienda='Craft-Beer'/>
        <CategoryNav/>
       </div>
       <Switch>
         <Route exact path='/'>
          <ItemListContainer greetings="¡Bienvenido a nuestra Tienda Online!"/>
          <Footer/>
         </Route>
         <Route path='/productos/:id'>
           <ItemDetailList />
         </Route>
         <Route path='/categoria/:id'>
            <ItemCategory productos={productos}/>
         </Route>
         <Route path='/contacto'>
           <Contacto/>
         </Route>
         <Route path='/productos'>
           <Productos/>
         </Route>
        <Route path='/cart'>
          <Cart/>
        </Route>
       </Switch>
      </div>

    </BrowserRouter>
  </CartContextProvider>
  );
}

export default App;
