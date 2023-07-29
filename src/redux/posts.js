import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "제목",
    content: "내용",
    author: "병수",
  },
  {
    id: "2",
    title: "제목2",
    content: "내용2",
    author: "병수2",
  },
  {
    id: "3",
    title: "제목3",
    content: "내용3",
    author: "병수3",
  },
];

const posts = createSlice({
  name: "posts",
  initialState,
  reducers: {
    deletePost: (state, action) => {
      return state.filter((post) => post.id !== action.payload);
    },
    addPost: (state, action) => {
      state.push(action.payload);
    },
    editPost: (state, action) => {
      let post = state.find((p) => p.id === action.payload.id);
      if (post) {
        post.title = action.payload.title;
        post.content = action.payload.content;
      }
    },
  },
});

export const { deletePost, addPost, editPost } = posts.actions;
export default posts;
