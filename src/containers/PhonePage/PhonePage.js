import React, {Component} from 'react'

import {connect} from "react-redux";
import {fetchPhoneById, phoneAddedToBasket} from "../../actions";
import Phone from "../../components/Phone/Phone";
import Loader from "../../components/Loader/Loader";

class PhonePage extends Component{

   async componentDidMount(){
     this.props.fetchPhoneById(this.props.match.params.id);
  }
  render(){
    if(this.props.loading){
      return <Loader/>
    }
    return(
      <div className='col-md-12'>
        {
          Object.keys(this.props.phone) ?
            <Phone phone={this.props.phone} phoneAddedToBasket={this.props.phoneAddedToBasket}/>
            : null
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    phone: state.phone.phone,
    loading: state.phone.loading
  }
};

const MapDispatchToProps = {
  fetchPhoneById: id => fetchPhoneById(id),
  phoneAddedToBasket: id => phoneAddedToBasket(id)
};

export default connect(mapStateToProps, MapDispatchToProps)(PhonePage)