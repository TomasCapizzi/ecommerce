import './Styles/main.scss';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Cart from './views/Cart/Cart';
import { CartContextProvider } from './Store/CartContext';
import CategoryNav from './components/Navbar/CategoryNav/CategoryNav';
import Contacto from './views/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import Home from './views/Home/Home';
import ItemCategory from './views/ItemCategory/ItemCategory';
import ItemDetailList from './views/ItemDetailList/ItemDetailList';
import Navbar from "./components/Navbar/Navbar";
import Pay from './views/CheckOut/Pay';
import Products from './views/Products/Products';
import React from 'react';
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
          <Home/>
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
            <Products />
         </Route>
         <Route path='/busqueda'>
           <ResultadoBusqueda/>
         </Route>
        <Route path='/cart'>
          <Cart/>
        </Route>
        <Route path='/fin-compra'>
          <Pay/>
        </Route>
       </Switch>
       
       <Footer/>
      </div>
    </BrowserRouter>
  </CartContextProvider>
  );
}

export default App;
