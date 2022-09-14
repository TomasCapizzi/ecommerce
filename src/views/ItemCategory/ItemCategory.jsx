import React,{useEffect, useState} from "react";

import Item from "../../components/ItemListContainer/ItemList/Item/Item";
import Spinner from "../../components/Spinner/Spinner";
import useCategoryTitle from "../../hooks/useCategoryTitle";
import useFetchDatabase from "../../hooks/useFetchDatabase";
import { useParams } from "react-router";

export default function ItemCategory(){
    const {id: idParams} = useParams()
    const [categoria, setCategoria] = useState([]);
    const [titulo, setTitulo] = useState('')
    const [load, setLoad] = useState(false);
    const {obtenerCategoria} = useFetchDatabase({setLoad, setCategoria})
    const {tituloCategoria} = useCategoryTitle({idParams,setTitulo})

    function handlerCategoria(){
        obtenerCategoria(idParams);
    }

    useEffect(()=>{
        handlerCategoria();
        tituloCategoria();
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[idParams]);

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