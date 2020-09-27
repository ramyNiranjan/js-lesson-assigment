import React from 'react'
import styled from "styled-components";

function FormAtom({ handleSubmit, onSubmit, children }) {
  return <FormStyle onSubmit={handleSubmit(onSubmit)}>{children}</FormStyle>;
}

export default FormAtom



const FormStyle=styled.form`
padding:4px;
`