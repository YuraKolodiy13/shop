import React from 'react'
import './Phone.scss'
import {NavLink} from  'react-router-dom'

const Phone = props => (
  <div className='Phone'>
    <div className="phone__main">
      <div className="phone__img--wrap">
        <div className="phone__img" style={{backgroundImage: `url(${props.phone.image})`}}></div>
      </div>
      <p className='phone__description'>{props.phone.description}</p>
      <div className="characteristic">
        {Object.keys(props.phone).map(key => {
          if(key === 'id' || key === 'categoryId' || key === 'name' || key === 'description' || key === 'price' || key === 'image') return null;
          else return (
            <div key={key} className='characteristic__row'>
              <p>{key}: </p>
              <p>{props.phone[key]}</p>
            </div>
          )
        })}
      </div>
    </div>
    <div className="phone__sidebar">
      <h1>{props.phone.name}</h1>
      <p>{props.phone.price}$</p>
      <NavLink to='/' exact className='btn' data-text="Back to store">Back to store</NavLink>
      <div className="btn" data-text="Add to basket" onClick={() => props.phoneAddedToBasket(props.phone.id)}>Add to basket</div>
    </div>
  </div>
);

export default Phone