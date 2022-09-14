import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

import React from 'react';

function SocialLinks() {
  return (
    <div className='links'>
        <a href="https://github.com/TomasCapizzi" target='_blank' rel="noreferrer"><AiOutlineGithub></AiOutlineGithub></a>
        <a href="https://www.linkedin.com/in/tomas-capizzi/" target='_blank' rel="noreferrer"><AiFillLinkedin/></a>
    </div>
  )
}

export default SocialLinks