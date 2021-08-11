//import react from 'react'
import {BsSearch} from 'react-icons/bs';

export default function Buscador(){

    return(
        <div>
            <input type="text" placeholder='Estoy buscando...' /><BsSearch className='navbar-btn-search'/>
        </div>
    )
}