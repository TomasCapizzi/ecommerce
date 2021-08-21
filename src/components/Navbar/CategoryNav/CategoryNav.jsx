import React, {useState, useEffect} from 'react';
import {categorias} from '../../../categorias';
import {Link} from 'react-router-dom';

function CategoryNav(){
    const [categoriasListado, setCategoriasListado] = useState([]);
    useEffect(()=>{
        setCategoriasListado(categorias)
    },[])


    return (
        <div className='categories-nav'>
            <ul>
               {categoriasListado.map(cat => <Link to={`/categoria/${cat.id}`} key={cat.id} style={{ textDecoration: 'none' }}><li>{cat.nombre}</li></Link>)}
            </ul>
        </div>
    )
}

export default CategoryNav;
 