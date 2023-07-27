import { configureStore, createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

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
let items = createSlice({
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
        author: `작성자`,
      };
      return [...state, newItem];
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

// 데이터 중앙 저장소 만들기
const store = configureStore({
  reducer: {
    // 2. 다른 곳에서 사용할 수 있게 configureStore에 넣어주기
    Items: items.reducer,
  },
});

export default store;
export const { addItem, deleteItem, editItem } = items.actions;
