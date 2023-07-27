import { styled } from "styled-components";

export const Maindiv = styled.div`
  display: flex;
  justify-content: end;
  padding: 12px;
`;

export const AddBtn = styled.button`
  border: none;
  padding: 8px;
  border-radius: 6px;
  background-color: skyblue;
  color: white;
  cursor: pointer;
`;

export const MaindivContents = styled.div`
  background-color: #eeeeee;
  height: 100px;
  border-radius: 24px;
  margin-bottom: 12px;
  display: flex;
  padding: 12px 16px 12px 16px;
`;

export const Maindiv3 = styled.div`
  flex: 4;
  border-right: 1px solid lightgrey;
  cursor: pointer;
`;

export const MainP = styled.p`
  width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const MainTxt = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-around;
  gap: 12px;
`;

export const EditBtn = styled.button`
  border: none;
  padding: 8px;
  border-radius: 6px;
  background-color: orange;
  color: white;
  cursor: pointer;
  margin-right: 6px;
`;

export const DelBtn = styled.button`
  border: none;
  padding: 8px;
  border-radius: 6px;
  background-color: red;
  color: white;
  cursor: pointer;
`;
