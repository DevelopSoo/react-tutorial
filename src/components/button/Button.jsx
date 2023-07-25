import React from 'react';
import * as S from './Button.styled';

const Button = (props) => {
  const { children, onClick, variant, color, size } = props;

  return (
    <S.Button variant={variant} color={color} size={size} onClick={onClick}>
      {children}
    </S.Button>
  );
};

export default Button;
