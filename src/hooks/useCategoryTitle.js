const useCategoryTitle = ({idParams, setTitulo}) => {
    
    function tituloCategoria(){
        if(idParams === '1'){
        console.log('hola')
         setTitulo('Clásicas')
        } else if( idParams === '2'){
           setTitulo('Lupuladas')
        } else if(idParams === '3'){
            setTitulo('Experimentales');
        }
    }
    
  return {
    tituloCategoria
  }
}

export default useCategoryTitle
