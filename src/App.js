import React from 'react';
import './Styles/main.scss';
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from './components/ItemListContainer/ItemListcontainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ItemDetailList from './components/ItemDetailContainer/ItemDetailList/ItemDetailList';
import Contacto from './components/Contacto/Contacto';
import Productos from './components/Productos/Productos';
import CategoryNav from './components/Navbar/CategoryNav/CategoryNav';
import ItemCategory from './components/ItemListContainer/ItemList/ItemCategory/ItemCategory';
import CartContextProvider, { CartContext } from './Store/CartContext';
import Cart from './components/Cart/Cart'



function App() {
  return (
   // <CartContext.Provider>
    <BrowserRouter>

     <div className="App">
       <div className='nav-container'>
        <Navbar nombreTienda='Craft-Beer'/>
        <CategoryNav/>
       </div>
       <Switch>
         <Route exact path='/'>
          <ItemListContainer greetings="¡Bienvenido a nuestra Tienda Online!"/>
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
           <Productos/>
         </Route>
        <Route path='/cart'>
          <Cart/>
        </Route>
       </Switch>
      </div>

    </BrowserRouter>
    //</CartContext.Provider>
  );
}

export default App;
