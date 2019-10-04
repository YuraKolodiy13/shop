import React from 'react';
import './Header.scss'
import {NavLink} from  'react-router-dom'

const Header = () =>{

  return (
    <div className='Header'>
      <h1>
        <NavLink to='/' exact>Phone's shop</NavLink>
      </h1>
      <ul>
        <li>
          <NavLink to='/basket'>Basket</NavLink>
        </li>
      </ul>
    </div>
  )
};

export default Header