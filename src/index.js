import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import './index.css';
import App from './App';
import CustomerContextProvider from './context/customerContext/CustomerContextProvider';
import UserContextProvider from './context/userContext/UserContextProvider';

ReactDOM.render(
  <React.StrictMode>
      <CustomerContextProvider>
    <UserContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </UserContextProvider>
      </CustomerContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

