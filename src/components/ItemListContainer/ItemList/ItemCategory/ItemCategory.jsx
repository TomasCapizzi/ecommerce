import React,{useState, useEffect} from "react";
import { useParams } from "react-router";
import Item from "../Item/Item";
import Spinner from "../../../Spinner/Spinner";
import {database} from '../../../../Firebase/productos'

export default function ItemCategory({productos}){

    console.log('a ver',productos)

    const {id: idParams} = useParams()
    const [categoria, setCategoria] = useState([]);
    const [load, setLoad] = useState(false);
    
    async function obtenerLista(){
        const listaProductos = await database.collection('productos');
        const listado = await listaProductos.get();
        getCategory(listado.docs.map((doc) => {return {...doc.data()}}))
    } 
    const getCategory = (listado)=>{
        const items = listado.filter(item =>
            item.categoria === parseInt(idParams))
        setCategoria(items);   
        setLoad(true);     
    }

    useEffect(()=>{
        obtenerLista();
    },[idParams]);


    return (
        <div className="contenedor-items-categoria">
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