import React from "react";
import styled from "styled-components";


export default function InputAtom({ select, label, register,...otherProps  }) {
  return (
    <InputAtomStyle>
      {label ? <LabelStyle>{label}</LabelStyle> : null}
      <InputStyle ref={register} {...otherProps} />
    </InputAtomStyle>
  );
}



export const InputAtomStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;
const InputStyle = styled.input`
 border:none;
 border-style:none;
 outline-style:none;
 padding:3px 5px;
`;
export const LabelStyle = styled.label`
 margin-bottom:3px;
 font-size:14px
`;

