import React from 'react';
import './Styles/main.scss';
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from './components/ItemListContainer/ItemListcontainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ItemDetailList from './components/ItemDetailContainer/ItemDetailList/ItemDetailList';


function App() {
  return (
    <BrowserRouter>
     <div className="App">
       <Navbar nombreTienda='Craft-Beer'/>
       <Switch>
         <Route exact path='/'>
          <ItemListContainer greetings="¡Bienvenido a nuestra Tienda Online!"/>
         </Route>

         <Route path='/productos/:id'>
           <ItemDetailList />
         </Route>

       </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
