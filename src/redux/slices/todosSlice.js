import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const todos = createSlice({
  name: "posts",
  initialState: [
    {
      id: nanoid(),
      title: "제목1",
      content: "졸지않기",
      author: "작성자1",
    },
    {
      id: nanoid(),
      title: "제목2",
      content: "과제하기",
      author: "작성자2",
    },
    {
      id: nanoid(),
      title: "제목3",
      content: "이해하기",
      author: "작성자3",
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      // 새로운 할일을 추가하는 리듀서
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      // 특정 할일을 제거하는 리듀서
      return state.filter((todo) => todo.id !== action.payload);
    },
    // 특정 할일을 수정하는 리듀서
    editTodo: (state, action) => {
      const { id, title, content } = action.payload;
      return state.map((todo) =>
        todo.id === id ? { ...todo, title, content } : todo
      );
    },
  },
});

// createSlice에서 생성한 리듀서
const todosReducer = todos.reducer;
export const { addTodo, removeTodo, editTodo } = todos.actions;
export default todosReducer;
