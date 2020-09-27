import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import styled from "styled-components";



import UserKit from '../service/data/UserKit'
import CreatUserComponent from "../components/CreatUserComponent";
import { createUserSchema } from "../utils/validationSchema/createUserSchema";
import ToastView from "../utils/toast/ToastView";






function CreateUser() {
  const userKit = new UserKit();
   const { register, handleSubmit, errors } = useForm({
     resolver: yupResolver(createUserSchema),
   });

    const onSubmit = (data,e) => {
      delete data.passwordConfirmation;
      userKit
        .register(data)
        .then(() => ToastView("Please Check your Email", "info"))
        .catch(() =>
          ToastView(
            "A user object with this email address already exists",
            "error"
          )
        );
      e.target.reset();
      
    };  


  return (
    <CreateUserStyle>
      <h1>Register</h1>
      <CreatUserComponent
        errors={errors}
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
    </CreateUserStyle>
  );
}

export default CreateUser


export const CreateUserStyle=styled.div`
  text-align:center;
  margin-top:100px;
`