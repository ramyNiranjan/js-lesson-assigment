import React, { useContext, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components';
import { CustomerContext } from '../context/customerContext/CustomerContextProvider';
import UserKit from '../service/data/UserKit';

function CustomerDetailPage() {
  
  const userKit = new UserKit();
  const { id } = useParams();
  const history=useHistory()
  const { getCustomerDetail, customerDetails } = useContext(
    CustomerContext
  );
  
  useEffect(()=>{
    getCustomerDetail(id)
  },[])

  function deleteCustomer(){
    userKit
      .deleteCustomer(id)
      .then(() => history.push("/home"))
      .catch((err) => console.log(err));
  }
 


  return (
    <CustomerDetailStyle>
      <h3>Customer detail</h3>

      {customerDetails &&
        customerDetails.map((item, index) => (
          <CustomerListStyle key={index}>
            <p>Name:-{item.name}</p>
            <p>Email:-{item.email}</p>
            <p>PaymentTerm:-{item.paymentTerm}</p>
            <p>VatNr:-{item.vatNr}</p>
            <p>Website:-{item.website}</p>
            <p>Reference:-{item.reference}</p>
            <p>OrganisationNr:-{item.organisationNr}</p>
            <p>PhoneNumber:-{item.phoneNumber}</p>
          </CustomerListStyle>
        ))}
      <Link to={`/update-customer/${id}`}>Update Customer</Link>
      <button onClick={() => deleteCustomer()}>Delete Customer</button>
    </CustomerDetailStyle>
  );
}

export default CustomerDetailPage


const CustomerDetailStyle=styled.div`
margin:100px auto;
width:450px;
text-align:center;
font-size:18px;
& h3{
  text-decoration:underline;
}
& button{
  margin-left:5px;
}

`
const CustomerListStyle = styled.div`
  margin: 20px;
  background-color: #cee1dd;
  & p {
    padding: 10px;
    text-align: left;
  }
`;