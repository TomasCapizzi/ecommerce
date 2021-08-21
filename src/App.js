import React from 'react';
import './Styles/main.scss';
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from './components/ItemListContainer/ItemListcontainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ItemDetailList from './components/ItemDetailContainer/ItemDetailList/ItemDetailList';
import ItemList from './components/ItemListContainer/ItemList/ItemList';
import Contacto from './components/Contacto/Contacto';
import CategoryNav from './components/Navbar/CategoryNav/CategoryNav';
import ItemCategory from './components/ItemListContainer/ItemList/ItemCategory/ItemCategory';
import { CartContextProvider } from './Store/CartContext';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import Pagar from './components/Pagar/Pagar';
import ResultadoBusqueda from './components/Buscador/Resultado/ResultadoBusqueda';



function App() {

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
            <div className='home-container'>
             <img src='https://images.pexels.com/photos/1561145/pexels-photo-1561145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='Portada'></img>
             <ItemListContainer greetings="¡Bienvenido a nuestra Tienda Online!"/>
            </div>
         </Route>
         <Route path='/productos/:id'>
           <ItemDetailList />
         </Route>
         <Route path='/categoria/:id'>
            <ItemCategory/>
         </Route>
         <Route path='/contacto'>
           <Contacto/>
         </Route>
         <Route path='/productos'>
           <div className='productos-container'>
             <ItemList/>
           </div>
         </Route>
         <Route path='/busqueda'>
           <ResultadoBusqueda/>
         </Route>
        <Route path='/cart'>
          <Cart/>
        </Route>
        <Route path='/fin-compra'>
          <Pagar/>
        </Route>
       </Switch>
       
       <Footer/>
      </div>
    </BrowserRouter>
  </CartContextProvider>
  );
}

export default App;
