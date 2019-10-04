import React from 'react'
import './Basket.scss'

import {connect} from "react-redux";

const Basket = props => {
  return (
    <div>
      <h2>Your order</h2>
      <div className="basket">
        <div className="basket__row">
          <p>Item</p>
          <p>Count</p>
          <p>Total</p>
          <p>Action</p>
        </div>
        {props.basketItems.map((item, key) => {
          return(
            <div className="basket__row" key={key}>
              <p>{item.name}</p>
              <p>{item.count}</p>
              <p>{item.total}</p>
              <p>do something</p>
            </div>
          )
        })}

      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return{
    basketItems: state.phone.basketItems
  }
}
export default connect(mapStateToProps)(Basket);
