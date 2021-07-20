import React,{useState, useEffect} from "react";
import { useParams } from "react-router";
import { productosList } from "../../../../productosList";
import Item from "../Item/Item";

export default function ItemCategory(){

    const {id: idParams} = useParams()
    const itemsCategoria = productosList;
    const [categoria, setCategoria] = useState([]);

    const getCategory = (idParams)=>{
        const items = itemsCategoria.filter(item =>
            item.categoria === parseInt(idParams))
        setCategoria(items);        
    }

    useEffect(()=>{
        getCategory(idParams)
    },[idParams]);

    console.log('categoria',categoria);

    return (
        <div className="contenedor-items-categoria">
            <div className='category-list'>
                {categoria.map(
                    item => (
                        <Item item={item} key={item.id}/>  
                    )
                 )

                }
            </div>
        </div>
    )
}