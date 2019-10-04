import React from 'react'
import './Phone.scss'

const Phone = props => (
  <div className='Phone'>
    <div className="phone__img--wrap">
      <div className="phone__img" style={{backgroundImage: `url(${props.phone.image})`}}></div>
    </div>
    <h1>{props.phone.name}</h1>
    <p>{props.phone.description}</p>
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
);

export default Phone