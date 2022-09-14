import React, {useRef} from 'react';

import {IoBeerOutline} from 'react-icons/io5';
import LeftSideNav from './LeftSide/LeftSideNav';
import ResponsiveNav from './ResponsiveNav/ResponsiveNav';
import RightSideNav from './RightSide/RightSideNav';

function Navbar(props){
    const title = props.nombreTienda;
    const menuRef = useRef();

    function mostrarMenu(){
        menuRef.classList.toggle('on');       
    } 

    return (
        <>
            <nav className="navbar">
                <LeftSideNav title={title} />
                <RightSideNav/>
            </nav>
            <div className='menu-hamb'>
                <h1>{props.nombreTienda} <IoBeerOutline /></h1>
                <ResponsiveNav mostrarMenu={mostrarMenu} menuRef={menuRef} />
            </div>
        </>
    );
}
export default Navbar;