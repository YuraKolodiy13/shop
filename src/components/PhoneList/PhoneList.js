import React from 'react'
import './PhoneList.scss'
import {NavLink} from "react-router-dom";

const PhoneList = props => (
  <div className='PhoneList'>
    <div className='phones__items'>
      {props.phones.map((item, key) =>
        <div className='phones__item' key={key}>
          <div className="phones__img--wrap">
            <div className="phones__img" style={{backgroundImage: `url(${item.image})`}}></div>
          </div>
          <div className="phones__info">
            <div className="phones__title">{item.name}</div>
            <p>{item.description}</p>
            <div className="phones__price">
              <span>Price:</span>
              <span>${item.price}</span>
            </div>
            <button className="btn" data-text="Add to basket" onClick={() => props.bookAddedToBasket(item.id)}>Add to basket</button>
          </div>
          <NavLink className='phones__link' to={'/phone/' + item.id}>{item.name}</NavLink>
        </div>
      )}
    </div>
  </div>
);

export default PhoneList