import React, { useState } from 'react'
import { useHistory} from 'react-router-dom'
import { useForm } from "react-hook-form";
import styled from "styled-components";




import UserKit from "../service/data/UserKit";
import FormAtom from "../components/atoms/FormAtom";
import InputAtom from "../components/atoms/InputAtom";
import {
  ErrorStyle,
  UserFormContainerStyle,
} from "../components/CreatUserComponent";
import { CreateUserStyle } from "./CreateUser";



function Login() {
  
  const { register, handleSubmit, errors, setError } = useForm();
  const history = useHistory();
  const params = new URLSearchParams(history.location.search);
  const uid = params.get("uid");
  const token = params.get("token");
  const userKit = new UserKit()


  function handleActivateAccount() {
    userKit.activateUser(uid, token).then(history.push("/login"));
  }


const onSubmit = (data,e) => {
  userKit
    .login(data)
    .then((res) => {
      userKit.setToken(res.data.token);
      history.push("/home");
    }).catch(err=>{
      setError("server", {
        type: "credential",
        message: err.response.data.nonFieldErrors[0],
      });
    });
  e.target.reset();
};  

  return (
    <LoginStyle>
      <h1>Activate account</h1>
      {uid && token && (
        <div>
          Your account is being activated
          {handleActivateAccount()}
        </div>
      )}
      {!uid && !token && (
        <LoginFormStyle>
          <p>Your account is now active. Please Login</p>

          <FormAtom onSubmit={onSubmit} handleSubmit={handleSubmit}>
            <InputAtom
              placeholder="email"
              type="text"
              name="email"
              register={register}
            />
            <InputAtom
              placeholder="password"
              type="password"
              name="password"
              register={register}
            />
            {errors.server?.message && (
              <ErrorStyle>
                Unable to log in with the credentials provided.
              </ErrorStyle>
            )}
            <InputAtom type="submit" />
          </FormAtom>
        </LoginFormStyle>
      )}
    </LoginStyle>
  );
}

export default Login


const LoginFormStyle = styled(UserFormContainerStyle)`
  text-align: center;
  margin-top: 100px;
  height:300px;
`;
const LoginStyle = styled(CreateUserStyle)`
  text-align: center;
  margin-top: 100px;
  height: 300px;
`;