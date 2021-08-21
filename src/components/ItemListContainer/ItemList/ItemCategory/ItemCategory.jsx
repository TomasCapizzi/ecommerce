import React,{useState, useEffect} from "react";
import { useParams } from "react-router";
import Item from "../Item/Item";
import Spinner from "../../../Spinner/Spinner";
import {database} from '../../../../Firebase/productos';

export default function ItemCategory(){
    const {id: idParams} = useParams()
    const [categoria, setCategoria] = useState([]);
    const [titulo, setTitulo] = useState('')
    const [load, setLoad] = useState(false);

    function tituloCategoria(id){
        if(id === '1'){
        console.log('hola')
         setTitulo('Clásicas')
        } else if( id === '2'){
           setTitulo('Lupuladas')
        } else if(id === '3'){
            setTitulo('Experimentales');
        }
    }

    useEffect(()=>{
        handlerCategoria();
        tituloCategoria(idParams);
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[idParams]);

    function handlerCategoria(){
        obtenerLista(idParams);
    }

    const obtenerLista = async (id)=>{
        const listaProductos = await database.collection('productos');
        const listado = await listaProductos.get();
        const itemsCat = listado.docs.map((doc) => {return {...doc.data()}});
        const items = itemsCat.filter(item =>
            item.categoria === parseInt(idParams));
        setCategoria(items);   
        setLoad(true);   
    }

    return (
        <div className="contenedor-items-categoria">
            <h3>{titulo}</h3>
            <div className='category-list'>                
                { load ?
                categoria.map(
                    item => (
                        <Item item={item} key={item.id}/>)
                 ) : <Spinner/>
                }
            </div>
        </div>
    )
}