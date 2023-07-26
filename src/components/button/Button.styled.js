import styled, { css } from 'styled-components';

export const Button = styled.button`
  border: none;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  margin-right: 6px;

  ${(props) =>
    // Solid Button
    props.variant === 'solid' &&
    css`
      background-color: var(--color-${props.color});
      color: var(--color-white);
    `}

  ${(props) =>
    // outLine Button
    props.variant === 'outline' &&
    css`
      border: 1px solid var(--color-black);
      color: var(--color-black);
    `}

    ${(props) =>
    // outLine Button
    props.size === 'XLarge' &&
    css`
      width: 100%;
      height: 40px;
      border: 1px solid var(--color-${props.color});
      color: var(--color-white);
    `}
`;
