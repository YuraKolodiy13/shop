import React from 'react';
import './Header.scss'
import {NavLink} from  'react-router-dom'
import {connect} from "react-redux";

const Header = props =>{

  return (
    <div className='Header'>
      <h1>
        <NavLink to='/' exact>Phone's shop</NavLink>
      </h1>
      <ul>
        <li>
          <NavLink to='/basket'>
            <i className="fas fa-shopping-basket"></i>
            {props.basketItems.length ? <span>{props.basketItems.reduce((sum, item) => sum + item.count, 0)}</span> : null}
          </NavLink>
        </li>
      </ul>
    </div>
  )
};


const mapStateToProps = state => {
  return{
    basketItems: state.phone.basketItems,
  }
}

export default connect(mapStateToProps)(Header)