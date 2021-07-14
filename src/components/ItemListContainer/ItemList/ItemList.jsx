import React, {useState, useEffect} from "react";
import Item from './Item/Item';

function ItemList(){
    const [itemListState, setItemListState] = useState([]);
    const itemList = [
        {
            id:1,
            titulo: 'Tropel',
            sub: 'Hoppy Lager',
            img: 'https://mefisto.com.ar/pub/media/catalog/product/cache/6dd18fb85a59916e944c7f1f42e58a4c/t/r/tropel_mundo_feliz_hoppy_lager.png',
            categoria: 1,
            precio: 205,
            stock:12
        },{
            id:2,
            titulo: 'Brewhouse',
            sub: 'Imperial IPA',
            img: 'https://mefisto.com.ar/pub/media/catalog/product/cache/6dd18fb85a59916e944c7f1f42e58a4c/f/4/f4f9f31a-6726-4e1f-9191-0e36dc9a269f_1.jpeg',
            categoria: 2,
            precio: 310,
            stock:8
        }, {
            id:3,
            titulo: 'Hopson',
            sub: 'Brut Saison',
            img: 'https://mefisto.com.ar/pub/media/catalog/product/cache/6dd18fb85a59916e944c7f1f42e58a4c/h/o/hopson_rebelion_pineapple_brut_saison_0.5l.png',
            categoria: 3,
            precio: 275,
            stock:16
        }, {
            id:4,
            titulo: 'Prinston',
            sub: 'American Amber Ale',
            img: 'https://mefisto.com.ar/pub/media/catalog/product/cache/6dd18fb85a59916e944c7f1f42e58a4c/c/6/c6ec3462-c61c-438d-91db-15cb6ce23f93_1.jpeg',
            categoria: 4,
            precio: 180,
            stock:4
        }, {
            id:5,
            titulo: 'Laurus',
            sub: 'IPA',
            img: 'https://mefisto.com.ar/pub/media/catalog/product/cache/6dd18fb85a59916e944c7f1f42e58a4c/l/a/laurus_micro_ipa.png',
            categoria: 5,
            precio: 300,
            stock:11
        }, {
            id:6,
            titulo: 'Santina',
            sub: 'Oktoberfest',
            img: 'https://mefisto.com.ar/pub/media/catalog/product/cache/6dd18fb85a59916e944c7f1f42e58a4c/f/e/festb.png',
            categoria: 6,
            precio: 230,
            stock:3
        }, {
            id:7,
            titulo: 'La Paloma',
            sub: 'American IPA',
            img: 'https://mefisto.com.ar/pub/media/catalog/product/cache/6dd18fb85a59916e944c7f1f42e58a4c/i/p/ipa-01.png',
            categoria: 6,
            precio: 260,
            stock:5
        }
    ];
    
    const obtenerLista = ()=> {
        return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(itemList)
        }, 1500)
    })
}

useEffect(()=>{
    obtenerLista().then((item)=>setItemListState(item))
},[]);

return(
    <div className='item-list'>
        {itemListState.map(
                item =>  (
                <Item item={item} key={item.id}/>
                )
                   
        )}           
    </div>
);
}

export default ItemList;