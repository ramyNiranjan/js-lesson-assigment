import React, { createContext, useEffect, useState } from 'react'
import useLocalStorage from '../../hooks/UseLocalStorage';
import UserKit from "../../service/data/UserKit";

function CustomerContextProvider({ children }) {
  const userKit = new UserKit();
  const [customer, setCustomers] = useLocalStorage("customerList", []);
  const [customerDetails, setCustomerDetails] = useState(null);

  useEffect(() => {
    showCustomers();
  }, []);

  function showCustomers() {
    userKit.getCustomerList().then((res) =>{
      setCustomers(res.data.results);
    })
    
  }

  function getCustomerDetail(id) {
    const customerDetail = customer.filter((item) => item.id === +id);
    setCustomerDetails(customerDetail);
  }

  const contextValues = {
    customer,
    showCustomers,
    getCustomerDetail,
    customerDetails,
  };

  return (
    <CustomerContext.Provider value={contextValues}>
      {children}
    </CustomerContext.Provider>
  );
}

export const CustomerContext = createContext();
export default CustomerContextProvider;
