import { database } from "../Firebase/productos";

const useFetchDatabase = ({setItemDetailState, setLoad, setItemListState, setCategoria}) => {
    async function obtenerItem(){
        const listaProductos = await database.collection('productos');
        const listado = await listaProductos.get();
        setItemDetailState(listado.docs.map((doc) => {return {...doc.data(), producto: doc.id}}));
        setLoad(true)
    }
    const obtenerListado = ()=> {
        const listaProductos = database.collection('productos');
            
        listaProductos.get().then((query) => setItemListState(query.docs.map((doc) => {
            setLoad(true);
            return {...doc.data(), producto: doc.id}         
        })))       
    }

    const obtenerCategoria = async (idParams)=> {
        const listaProductos = await database.collection('productos');
        const listado = await listaProductos.get();
        const itemsCat = listado.docs.map((doc) => {return {...doc.data()}});
        const items = itemsCat.filter(item =>
            item.categoria === parseInt(idParams));
        setCategoria(items);   
        setLoad(true); 
    }
  return {
    obtenerItem,
    obtenerListado,
    obtenerCategoria
  }
}

export default useFetchDatabase



/*
    const obtenerLista = ()=> {
        const listaProductos = database.collection('productos');
            
        listaProductos.get().then((query) => setItemListState(query.docs.map((doc) => {
            setLoad(true);
            return {...doc.data(), producto: doc.id}         
        })))       
    }
*/