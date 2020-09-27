import React from 'react'
import { InputAtomStyle, LabelStyle } from "./InputAtom";

function SelectAtom( {label, register, ...otherProps}) {
  return (
    <InputAtomStyle>
      {label ? <LabelStyle>{label}</LabelStyle> : null}
      <select ref={register} {...otherProps}>
        <option value="0">Charity</option>
        <option value="1">NGO</option>
        <option value="2">Volunteering</option>
      </select>
    </InputAtomStyle>
  );
}

export default SelectAtom

