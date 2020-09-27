import React, { useContext, useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';



import CustomerFormComponent from '../components/CustomerFormComponent'
import { inputValuesCutomer } from "../utils/formValues/createCustomerFormValues";
import { createCustomerSchema } from "../utils/validationSchema/createCustomerSchema";
import UserKit from '../service/data/UserKit';
import { CustomerContext } from '../context/customerContext/CustomerContextProvider';

function UpdateCustomer() {
  const userKit = new UserKit();
  const { id } = useParams();
  const history = useHistory();
 
   const {getCustomerDetail, customerDetails,customer } = useContext(
     CustomerContext
   );
    const { register, handleSubmit, errors } = useForm({
      resolver: yupResolver(createCustomerSchema),
    });

    useEffect(() => {
      getCustomerDetail(id);
    }, []);
  

  const onSubmit = (data) => {
    console.log(data)
    console.log(customer);
    userKit
    .updateCustomer(id, data)
    .then(() => history.push("/home"))
    .catch((err) => console.log(err.response));
  };
  

  return (
    <CustomerFormComponent
      values={inputValuesCutomer}
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
      errors={errors}
      register={register}
      value={customerDetails && customerDetails[0]}
    />
  );
}

export default UpdateCustomer
