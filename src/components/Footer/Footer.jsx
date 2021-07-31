import React from 'react';
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
export default function Footer(){
    return <div className='footer'>
        <h3>Ecommerce realizado por <a href="https://tomascapizzi.github.io/" target='_blank'>Tomas Capizzi</a></h3>
        <h5>Curso React JS de Coderhouse</h5>
        <div className='links'>
            <a href="https://github.com/TomasCapizzi" target='_blank'><AiOutlineGithub></AiOutlineGithub></a>
            <a href="https://www.linkedin.com/in/tomas-capizzi/" target='_blank'><AiFillLinkedin/></a>
        </div>
    </div>
}