import React, {useEffect, useState} from 'react';

import {Link} from 'react-router-dom';
import {categorias} from '../../../data/categorias';

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
 