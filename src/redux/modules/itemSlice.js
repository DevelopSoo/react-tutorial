import uuid from "react-uuid";
import { createSlice } from "@reduxjs/toolkit";
// import produce from "immer";

// useState의 초기값 정의
const initialItems = [
  {
    id: uuid(),
    title: "제목1",
    content: "내용1입니다.",
    author: "작성자1",
  },
  {
    id: uuid(),
    title: "제목2",
    content: "내용2입니다.",
    author: "작성자2",
  },
  {
    id: uuid(),
    title: "제목3",
    content: "내용3입니다.",
    author: "작성자3",
  },
];

// 1. createSlice 만들기
const items = createSlice({
  name: "Items",
  initialState: initialItems,
  // 3. reducers 추가
  reducers: {
    // 4. reducer 안에 변경함수 만들기
    addItem: (state, action) => {
      // action.payload = {title, content}
      const newItem = {
        id: uuid(),
        title: action.payload.title,
        content: action.payload.content,
        author: action.payload.currentUser,
      };
      return [...state, newItem];
      //immer, state.push
      //   return produce(state, (draft) => {
      //     draft.initialItems.push(newItem);
      //   });
    },

    deleteItem: (state, action) => {
      // action.payload = id
      const newItems = state.filter((item) => item.id !== action.payload);
      return newItems;
    },

    editItem: (state, action) => {
      // action.payload = {title, content, id}
      const editedItems = state.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              title: action.payload.title,
              content: action.payload.content,
            }
          : item
      );
      return editedItems;
    },
  },
});

export const { addItem, deleteItem, editItem } = items.actions;
export default items.reducer;
