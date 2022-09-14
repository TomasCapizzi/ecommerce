import React,{useState} from 'react';

import BuyButtons from './BuyButtons';
import OptionsButtons from './OptionsButtons';
import Price from './Price';
import Title from './Title';
import useAddToCart from '../../../hooks/useAddToCart';

const ItemDetail = ({item, indice}) => {

  item.sort((a,b)=> {return a.id-b.id});
  
   const [contador, setContador] = useState(1);
   const [disableBtn, setDisableBtn] = useState(false);
   const [finCompra, setFinCompra] = useState(false);   
   const {id, marca, estilo, precio, img, producto, stock} = item[indice];

   const detalleProducto = {
     id,
     estilo,
     marca,
     precio,
     img,
     producto,
     stock,
     cantidad: contador
   }
   const {agregarItems, modificarItems} = useAddToCart({setFinCompra,detalleProducto, contador, estilo, marca})

    return(
        <div className='item-detail'>
            <div className='item-detail-img-container'>
              <img src={item[indice].img} alt="" />
            </div> 
            <div className='item-detail-description'>                
              <Title item={item} indice={indice} />
              <Price item={item} indice={indice} />
                { !finCompra ? <BuyButtons contador={contador} setContador={setContador} item={item} indice={indice} disableBtn={disableBtn} setDisableBtn={setDisableBtn} agregarItems={agregarItems} />
                 : <OptionsButtons modificarItems={modificarItems} />
                }                             
            </div>
        </div>
    )
}
export default ItemDetail;