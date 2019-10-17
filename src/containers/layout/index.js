import React from 'react'
import {Switch, Route} from "react-router";
import PhonesListPage from "../PhonesListPage/PhonesListPage";
import PhonePage from "../PhonePage/PhonePage";
import Header from "../../components/Header/Header";
import BasketPage from "../BasketPage/BasketPage";
import CategoryPage from "../CategoryPage/CategoryPage";

const routes = (
  <Switch>
    <Route path='/' component={PhonesListPage} exact/>
    <Route path="/phone/:id" component={PhonePage}/>
    <Route path="/category/:categoryId" component={CategoryPage}/>
    <Route path="/basket" component={BasketPage}/>
  </Switch>
);

const Layout = () => (
  <div className='view-container'>
    <div className="container">
      <Header/>
      <div className="row">
        {routes}
      </div>
    </div>
  </div>
);

export default Layout