import React, {  useContext, useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { Link } from 'react-router-dom';
import styled from "styled-components";


import UserKit from '../service/data/UserKit';
import { createCustomerSchema } from "../utils/validationSchema/createCustomerSchema";
import ToastView from '../utils/toast/ToastView';
import { CustomerContext } from "../context/customerContext/CustomerContextProvider";
import { UserContext } from '../context/userContext/UserContextProvider';
import { inputValuesCutomer } from '../utils/formValues/createCustomerFormValues';
import CustomerFormComponent from '../components/CustomerFormComponent';

function Home() {

  const userKit = new UserKit();
  const [showInfo,setShowInfo]=useState()
  const [createdId, setCreatedId] = useState(0);
  const { userInfo } = useContext(UserContext);
  const { register, handleSubmit, errors } = useForm({
     resolver: yupResolver(createCustomerSchema),
   });
   const {customer, showCustomers } = useContext(
     CustomerContext
   );

   useEffect(() => {
     showCustomers();
   }, [createdId]);


  



  
  const onSubmit = (data, e) => {
    console.log(data)
    userKit
      .createCustomer(data)
      .then((res) => {
        setCreatedId(res.data.id);
        ToastView("Customer Created", "info");
      })
      .catch(() => ToastView("You can't add more customers", "error"));
      e.target.reset();
  };
  
  
console.log(userInfo)
  return (
    <HomeStyle>
      <h2>Welcome to customer list</h2>
      <button onClick={() => setShowInfo(!showInfo)}>Show user Info</button>
      {showInfo && (
        <UserInfoStyle>
          <span>First Name:{userInfo.firstName}</span>
          <span>Last Name:{userInfo.lastName}</span>
          <span>Email:{userInfo.email}</span>
        </UserInfoStyle>
      )}

      {customer ? (
        customer.map((item, index) => (
          <CustomerListStyle key={index}>
            <LinkStyle to={`/customer/${item.id}`}>{`${index + 1}.${
              item.name
            }`}</LinkStyle>
          </CustomerListStyle>
        ))
      ) : (
        <span>No customers</span>
      )}

      <CustomerFormComponent
        values={inputValuesCutomer}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        errors={errors}
        register={register}
      />
    </HomeStyle>
  );
}

export default Home


const CustomerListStyle=styled.div`
 margin:auto;
 width:400px;
 display:flex;
 flex-wrap:wrap;
 justify-content:center;
 padding:10px;
 text-align:right;
 
`
const LinkStyle = styled(Link)`
  color: #2cb1f9;
  font-weight: bold;
  font-size: 20px;
  text-decoration:underline;
  
`;

const HomeStyle = styled.div`
text-align:center;
margin-top:50px;
`;
const UserInfoStyle = styled.div`
  width: 300px;
  margin: auto;
  background-color: #b9f3e4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;

  & span {
    text-align: left;
    font-size: 16px;
  }
`;


