import { styled } from 'styled-components';

export const FormLayout = styled.form`
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const InputLayout = styled.input`
  width: 100%;
  height: 60px;
  font-size: 18px;
  border-radius: 18px;
  border: 1px solid lightgray;
  padding: 8px;
  box-sizing: border-box;
`;

export const TextareaLayout = styled.textarea`
  resize: none;
  height: 400px;
  width: 100%;
  font-size: 18px;
  border-radius: 12px;
  border: 1px solid lightgray;
  padding: 12px;
  box-sizing: border-box;
`;
