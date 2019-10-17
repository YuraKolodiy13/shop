import React from 'react'

import {NavLink} from "react-router-dom";

const Categories = props => {
  return(
    <div>
      <h3>Categories</h3>
      <ul>
        <li>
          <NavLink to={'/'} exact>All</NavLink>
        </li>
        {props.phones.map((item, key) => {
          if(+item.categoryId === key) return null;
          return(
            <li key={key} >
              <NavLink to={'/category/' + item.categoryId}>{item.name.split(' ')[0]}</NavLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Categories;