import React from 'react';
import * as S from './Input.styled';

const Input = (props) => {
  const { placeholder, value, type, onChange, name } = props;
  return <S.Input placeholder={placeholder} value={value} type={type} name={name} onChange={onChange}></S.Input>;
};

export default Input;
