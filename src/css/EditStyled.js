import { styled } from "styled-components";

export const EditForm = styled.form`
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const EditInput = styled.input`
  width: 100%;
  height: 60px;
  font-size: 18px;
  border-radius: 12px;
  border: 1px solid lightgrey;
  padding: 8px;
  box-sizing: border-box;
`;

export const EditDiv = styled.div`
  height: 400px;
`;

export const EditText = styled.textarea`
  resize: none;
  height: 100%;
  width: 100%;
  font-size: 18px;
  border-radius: 12px;
  border: 1px solid lightgrey;
  padding: 12px;
  box-sizing: border-box;
`;

export const EditBtn = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  color: white;
  border-radius: 12px;
  background-color: orange;
  cursor: pointer;
`;
