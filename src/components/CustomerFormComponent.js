import React,{Fragment} from 'react'
import styled from 'styled-components';


import FormAtom from './atoms/FormAtom';
import { ErrorStyle, UserFormContainerStyle } from "./CreatUserComponent";
import InputAtom from "./atoms/InputAtom";

function CustomerFormComponent({
  values,
  errors,
  onSubmit,
  register,
  handleSubmit,
  value
}) {



  return (
    <CustomerFormStyle>
      <h4>Create Customers</h4>
      <FormAtom onSubmit={onSubmit} handleSubmit={handleSubmit}>
        {values.map(([lable, type, name]) => (
          <Fragment key={name}>
            <InputAtom
              label={lable}
              type={type}
              name={name}
              register={register}
              defaultValue={value ? value[name] : ""}
            />

            <ErrorStyle>{errors[name]?.message}</ErrorStyle>
          </Fragment>
        ))}

        <InputAtom type="submit" />
      </FormAtom>
    </CustomerFormStyle>
  );
}

export default CustomerFormComponent;



const CustomerFormStyle = styled(UserFormContainerStyle)`
  margin-top: 75px;
`;