import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import './index.css';
import App from './App';
import CustomerContextProvider from './context/customerContext/CustomerContextProvider';
import UserContextProvider from './context/userContext/UserContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <CustomerContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CustomerContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

