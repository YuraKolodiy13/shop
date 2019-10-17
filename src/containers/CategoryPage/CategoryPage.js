import React, {Component} from 'react'

import {connect} from "react-redux";
import {fetchPhoneByCategoryId, fetchPhones, phoneAddedToBasket} from "../../actions";
import Loader from "../../components/Loader/Loader";
import PhoneList from "../../components/PhoneList/PhoneList";
import Categories from "../../components/Categories/Categories";

class PhonePage extends Component{

  categoryActive = this.props.match.params.categoryId;

  async componentDidMount(){
    this.props.fetchPhones();
    this.props.fetchPhoneByCategoryId(this.props.match.params.categoryId);
  }
  componentDidUpdate(){
    if(this.categoryActive !== this.props.match.params.categoryId){
      this.props.fetchPhoneByCategoryId(this.props.match.params.categoryId);
      this.categoryActive = this.props.match.params.categoryId;
    }
  }
  render(){
    if(this.props.loading){
      return <Loader/>
    }
    return(
      <>
        <div className="col-md-3">
          <Categories phones={this.props.phones}/>
        </div>
        <div className='col-md-9'>
          <PhoneList phones={this.props.category} phoneAddedToBasket={this.props.phoneAddedToBasket}/>
        </div>
      </>

    )
  }
}

const mapStateToProps = state => {
  return{
    phones: state.phone.phones,
    category: state.phone.category,
    loading: state.phone.loading
  }
};

const MapDispatchToProps = {
  fetchPhones,
  fetchPhoneByCategoryId: id => fetchPhoneByCategoryId(id),
  phoneAddedToBasket: id => phoneAddedToBasket(id)
};

export default connect(mapStateToProps, MapDispatchToProps)(PhonePage)