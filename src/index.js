import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore, createSlice, nanoid } from "@reduxjs/toolkit";

const lists = createSlice({
  name: "contents",
  initialState: [
    {
      id: nanoid(),
      title: "안녕하세요",
      content: "내용입니다",
      author: "김의진1",
    },
    {
      id: nanoid(),
      title: "제목입니다.2",
      content: "내용입니다.2",
      author: "김의진2",
    },
    {
      id: nanoid(),
      title: "제목입니다.3",
      content: "내용입니다.3",
      author: "김의진3",
    },
  ],
  reducers: {
    addItem: (state, action) => {
      const { title, content } = action.payload;
      state.push({
        id: nanoid(),
        title,
        content,
        author: "",
      });
    },
    editItem: (state, action) => {
      const { id, title, content } = action.payload;
      const itemToUpdate = state.find((item) => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.title = title;
        itemToUpdate.content = content;
      }
    },
    deleteItem: (state, action) => {
      const id = action.payload;
      return state.filter((item) => item.id !== id);
    },
  },
});

const store = configureStore({
  reducer: {
    contents: lists.reducer,
  },
});

export const { addItem, editItem, deleteItem } = lists.actions;
export default lists.reducer;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Routes, Route 태그 및 react-router-dom을 사용하기 위해선 최상단에 BrowserRouter로 감싸줘야한다 */}
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
