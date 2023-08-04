import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "식사하기",
    content: "식단하기",
    author: "작성자1",
  },
  {
    id: "2",
    title: "영화보기",
    content: "엘리멘탈 보기",
    author: "작성자2",
  },
  {
    id: "3",
    title: "운동하기",
    content: "유산소하기",
    author: "작성자3",
  },
];

const posts = createSlice({
  name: "posts",
  initialState,
  reducers: {
    deletePost: (state, action) => {
      console.log(action.payload);
      return state.filter((post) => post.id !== action.payload);
    },
    //참이 되면 남겨둔다
    //state = 배열로 묶여있어야함 ex) 윤식님 윤건님 지은님 등 비교대상이 있어야하니까
    //action.payload는 메인페이지의 삭제부분에서 todo.id에 해당
    //지은님 !== 남자
    addPost: (state, action) => {
      // state.push(action.payload);
      return [...state, action.payload];
    },
    editPost: (state, action) => {
      let post = state.find((p) => p.id === action.payload.id);
      // console.log(post);
      if (post) {
        post.title = action.payload.title;
        post.content = action.payload.content;
      }
    },
  },
});

export const { deletePost, addPost, editPost } = posts.actions;
export default posts;
