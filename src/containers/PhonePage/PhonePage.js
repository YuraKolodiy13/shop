import React, {Component} from 'react'

import {connect} from "react-redux";
import {fetchPhoneById} from "../../actions";
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
      <div className='Phone'>
        {
          Object.keys(this.props.phone) ?
            <Phone phone={this.props.phone}/>
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

const MapDispatchToProps = dispatch => {
  return{
    fetchPhoneById: id => dispatch(fetchPhoneById(id))
  }
};

export default connect(mapStateToProps, MapDispatchToProps)(PhonePage)