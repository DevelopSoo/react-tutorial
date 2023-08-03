import { createSlice } from '@reduxjs/toolkit';
import uuid from 'react-uuid';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const initialState = [
  { id: uuid(), title: '정예반 과제 하기', content: '내용', author: '김선익' },
  { id: uuid(), title: 'typeScript 강의 듣기', content: '내용', author: '박진희' },
  { id: uuid(), title: 'TIL 작성하기', content: '내용', author: '나혜인' }
];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // todo Add를 만든다.
    add(state, action) {
      return (
        // state + add된 todo를 추가한다.
        [...state, action.payload]
      );
    },

    // todo Remove를 만든다.
    remove(state, action) {
      return state.filter((todo) => todo.id !== action.payload);
    },

    // todo Edit을 만든다.

    // 1. 전체 post 데이터를 가져와서
    // 2. 내가 수정하려고 하는 post를 찾는다

    // 3. 해당 post를 수정한다

    // 1. 내가 수정할 객체를 찾는다. filter

    edit(state, action) {
      return state.map((todo) => {
        if (todo.id !== action.payload.id) {
          return todo;
        } else {
          return action.payload;
        }
      });
    }
  }
});

// todosSlice, action을 export 합니다.
export const { add, remove, edit } = todosSlice.actions;
export default todosSlice.reducer;
