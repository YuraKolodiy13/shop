import React, {Component} from 'react'

import {connect} from "react-redux";
import {phoneAddedToBasket, fetchPhones,
  // loadMorePhones
} from "../../actions";

import PhoneList from "../../components/PhoneList/PhoneList";
import Loader from "../../components/Loader/Loader";
import Search from "../../components/Search/Search";
import Categories from "../../components/Categories/Categories";

class PhonesListPage extends Component{

  state = {
    term: ''
  };

  componentDidMount(){
    this.props.fetchPhones();
  }

  onSearchChange = term =>{
    this.setState({
      term
    })
  }

  search(items, term){
    return items.filter(item => item.name.toLowerCase().indexOf(term.toLowerCase()) > -1)
  }


  render(){
    const visibleItems = this.search(this.props.phones, this.state.term);
    if(this.props.loading){
      return <Loader/>
    }
    return(
      <>
        <div className="col-md-3">
          <Search value='' onSearchChange={this.onSearchChange} />
          <Categories phones={this.props.phones}/>
        </div>
        <div className="col-md-9">
          <PhoneList phones={visibleItems} phoneAddedToBasket={this.props.phoneAddedToBasket}/>
          {/*<button className="btn" data-text="Load more" onClick={this.props.loadMorePhones}>Load more</button>*/}
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return{
    phones: state.phone.phones,
    visiblePhones: state.phone.visiblePhones,
    loading: state.phone.loading
  }
};

const MapDispatchToProps = {
  fetchPhones,
  // loadMorePhones,
  phoneAddedToBasket: id => phoneAddedToBasket(id)
};

export default connect(mapStateToProps, MapDispatchToProps)(PhonesListPage)