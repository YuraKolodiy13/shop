import React, {Component} from 'react'
import './Search.scss'

class Search extends Component{
  state = {
    term: ''
  };

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({
      term
    });
    this.props.onSearchChange(term);
    console.log(term)
  }

  render(){
    return (
      <div className='Search'>
        <h3>Search</h3>
        <input type="search" value={this.state.term} onChange={this.onSearchChange}/>
      </div>
    )
  }

}

export default Search;