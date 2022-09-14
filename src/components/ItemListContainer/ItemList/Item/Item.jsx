import React,{useState} from "react";

import BuyButtons from "./BuyButtons";
import {Link} from 'react-router-dom';
import OptionsButtons from "./OptionsButtons";
import Title from "./Title";
import useAddToCart from "../../../../hooks/useAddToCart";

function Item({item}){
    const [contador, setContador] = useState(1);
    const [disableBtn, setDisableBtn] = useState(false);
    const [finCompra, setFinCompra] = useState(false);
    const {id, estilo, marca, precio, img, stock, producto} = item;
    const detalleProducto = {
     id: id,
     estilo: estilo,
     marca: marca,
     precio: precio,
     img: img,
     stock: stock,
     producto: producto,
     cantidad: contador
    }
    const {agregarItems, modificarItems} = useAddToCart({setFinCompra,detalleProducto, contador, estilo, marca})


    return(
        <div className='item'>
          <Link to={'/productos/' + item.id}><img src={item.img} alt="item-imagen" /></Link>
          <Title item={item} />
          { !finCompra ? <BuyButtons contador={contador} setContador={setContador}  item={item} disableBtn={disableBtn} setDisableBtn={setDisableBtn} agregarItems={agregarItems} /> : <OptionsButtons modificarItems={modificarItems} />
            } 
        </div>
    )
}

export default Item;
