import React from 'react';
import { Switch, Route } from "react-router-dom";


import CreateUser from './pages/CreateUser'
import Login from "./pages/Login";
import Home from "./pages/Home";
import {GlobalStyles} from "./globalStyle/GlobalStyle";
import ToastConfig from "./utils/toast/ToastConfig"
import CustomerDetailPage from './pages/CustomerDetailPage';
import UpdateCustomer from './pages/UpdateCustomer';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={CreateUser} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/update-customer/:id" component={UpdateCustomer} />
        <Route path="/customer/:id" component={CustomerDetailPage} />
      </Switch>
     <ToastConfig/>
    </div>
  );
}

export default App;
