import { createSlice } from '@reduxjs/toolkit';
import uuid from 'react-uuid';

const initialState = [
  { id: uuid(), title: '정예반 과제 하기', content: '내용', author: '김선익' },
  { id: uuid(), title: 'typeScript 강의 듣기', content: '내용', author: '김선익' },
  { id: uuid(), title: 'TIL 작성하기', content: '내용', author: '김선익' }
];
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {}
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;
