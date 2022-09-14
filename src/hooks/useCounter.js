const  useCounter = ({contador, stock, setContador}) => {
    const sumarContador =()=>{
        if(contador < stock && stock>=1){
            setContador(contador+1);
        } 
    }
    const restarContador =()=>{
        if(contador<= stock && contador>1){
            setContador(contador-1);            
        }
    }
  return {
    sumarContador,
    restarContador
  }
}

export default useCounter;