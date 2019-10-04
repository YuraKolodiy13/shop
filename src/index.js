import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
// import App from './components/App/App';
import store from './store'
import {BrowserRouter} from  'react-router-dom'
import { Provider } from 'react-redux'
import Layout from "./containers/layout";

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <Layout/>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
