import React from 'react'
import {Switch, Route} from "react-router";
import PhonesListPage from "../PhonesListPage/PhonesListPage";
import PhonePage from "../PhonePage/PhonePage";
import Header from "../../components/Header/Header";
import BasketPage from "../BasketPage/BasketPage";

const routes = (
  <Switch>
    <Route path='/' component={PhonesListPage} exact/>
    <Route path="/phone/:id" component={PhonePage}/>
    <Route path="/basket" component={BasketPage}/>
  </Switch>
);

const Layout = () => (
  <div className='view-container'>
    <div className="container">
      <Header/>
      <div className="row">
        <div className="col-md-3">
          sidebar
        </div>
        <div className="col-md-9">
          {routes}
        </div>
      </div>
    </div>
  </div>
);

export default Layout