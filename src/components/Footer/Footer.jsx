import React from 'react';
import SocialLinks from './SocialLinks';

export default function Footer(){
    return <div className='footer'>
        <h3>Ecommerce realizado por <a href="https://tomascapizzi.github.io/" target='_blank'rel="noreferrer" >Tomas Capizzi</a></h3>
        <h5>Curso React JS de Coderhouse</h5>
        <SocialLinks/>
    </div>
}