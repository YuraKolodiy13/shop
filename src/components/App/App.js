import React from 'react';
import {connect} from 'react-redux'
import './App.css';

const App = props => {
  return (
    <div className="App">{props.text}</div>
  );
};


const mapStateToProps = state => {
  return{
    text: state.phone.text
  }
};

export default connect(mapStateToProps)(App)