import React, { Fragment } from 'react'
import styled from "styled-components";

import InputAtom from "./atoms/InputAtom";
import FormAtom from "./atoms/FormAtom";
import SelectAtom from './atoms/SelectAtom';
import {  inputValuesUser } from '../utils/formValues/createUserFormValues';







function CreatUserComponent({ errors, register, handleSubmit, onSubmit }) {
  return (
    <UserFormContainerStyle>
      <FormAtom onSubmit={onSubmit} handleSubmit={handleSubmit}>
        {inputValuesUser.map(([lable, type, name]) => (
          <Fragment key={name}>
            <InputAtom
              label={lable}
              type={type}
              name={name}
              register={register}
            />

            <ErrorStyle>{errors[name]?.message}</ErrorStyle>
          </Fragment>
        ))}

        <SelectAtom
          label="Organisation Type"
          name="organisationKind"
          register={register}
        />
        {<ErrorStyle>{errors.organisationKind?.message}</ErrorStyle>}

        <InputAtom type="submit" />
      </FormAtom>
    </UserFormContainerStyle>
  );
}

export default CreatUserComponent;

 export const ErrorStyle = styled.span`
  color: #ff0032;
  font-size:15px;
`;

export const UserFormContainerStyle = styled.div`
  background-color: #b9f3e4;
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000;
  margin:auto;
  padding-top:10px;
`;




