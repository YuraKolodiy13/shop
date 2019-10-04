import React, {Component} from 'react'

import {connect} from "react-redux";
import {bookAddedToBasket, fetchPhones, loadMorePhones} from "../../actions";

import PhoneList from "../../components/PhoneList/PhoneList";
import Loader from "../../components/Loader/Loader";

class PhonesListPage extends Component{

  componentDidMount(){
    this.props.fetchPhones();
  }

  render(){
    if(this.props.loading){
      return <Loader/>
    }
    return(
      <>
        <PhoneList phones={this.props.phones} bookAddedToBasket={this.props.bookAddedToBasket}/>
        <div className="btn" data-text="Load more" onClick={loadMorePhones}>Load more</div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return{
    phones: state.phone.phones,
    loading: state.phone.loading
  }
};

const MapDispatchToProps = {
  fetchPhones,
  loadMorePhones,
  bookAddedToBasket: id => bookAddedToBasket(id)
};

export default connect(mapStateToProps, MapDispatchToProps)(PhonesListPage)