import React from 'react'
import './Basket.scss'

import {NavLink} from  'react-router-dom'
import {connect} from "react-redux";
import {checkout, phoneDecreasedFromBasket, phoneIncreasedToBasket, phoneRemovedFromBasket} from "../../actions";

const Basket = props => {
  return (
    <div>
      <h2>Your order</h2>
      <div className="basket">
        <div className="basket__row">
          <p>Item</p>
          <p>Count</p>
          <p>Total</p>
        </div>
        {props.basketItems.map((item, key) => {
          return(
            <div className="basket__row" key={key}>
              <p className='mainInfo'><NavLink to={'/phone/' + item.id}>{item.name}</NavLink> <span style={{backgroundImage: `url(${item.image})`}}></span></p>
              <p className='actions'>
                <span onClick={() => props.phoneIncreasedToBasket(item.id)}>+</span>
                {item.count}
                <span onClick={() => props.phoneDecreasedFromBasket(item.id)}>-</span>
              </p>
              <p>${item.total}</p>
              <span className='btn-remove' data-text="x" onClick={() => props.phoneRemovedFromBasket(item.id)}>x</span>
            </div>
          )
        })}
        <h4 className="basket__total">
          Total ${props.orderTotal}
        </h4>

      </div>
      {props.basketItems.length > 0
        ? <button className="btn" data-text="Checkout" onClick={() => props.checkout(props.basketItems)}>Checkout</button>
        : null
      }

    </div>
  )
}

const mapStateToProps = state => {
  return{
    basketItems: JSON.parse(localStorage.getItem('basketItems')) || state.phone.basketItems,
    orderTotal: state.phone.orderTotal
  }
}

const mapDispatchToProps = {
  phoneDecreasedFromBasket,
  phoneIncreasedToBasket,
  phoneRemovedFromBasket,
  checkout
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
