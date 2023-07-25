import { styled } from 'styled-components';

export const ButtonLayout = styled.div`
  display: flex;
  justify-content: end;
  padding: 12px;
`;

export const Button = styled.button`
  border: none;
  padding: 8px;
  border-radius: 6px;
  background-color: var(--color-blue);
  color: var(--color-white);
  cursor: pointer;
`;

export const TodoItem = styled.div`
  background-color: var(--color-gray);
  height: 100px;
  border-radius: 24px;
  margin-bottom: 12px;
  display: flex;
  padding: 12px 16px;
`;

export const TodoItemContent = styled.div`
  flex: 4;
  border-right: 1px solid lightgrey;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

export const TodoItemDescription = styled.p`
  width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const TodoItemAuth = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: end;
  justify-content: space-around;
  gap: 12px;
`;

export const Author = styled.div``;
