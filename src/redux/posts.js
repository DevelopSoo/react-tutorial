import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: nanoid(),
    title: "제목1",
    content: "내용1",
    author: "호빵",
  },
  {
    id: nanoid(),
    title: "제목2",
    content: "내용2",
    author: "찐빵",
  },
  {
    id: nanoid(),
    title: "제목3",
    content: "내용3",
    author: "식빵",
  },
];

const posts = createSlice({
  name: "postList",
  initialState,
  reducers: {
    // 게시글 추가
    addPost: (state, action) => {
      state.push(action.payload);
      // return [...state, action.payload];
    },

    // 게시글 삭제
    deletePost: (state, action) => {
      return state.filter((post) => post.id !== action.payload);
    },

    // 게시글 수정
    editPost: (state, action) => {
      const { id, title, content } = action.payload;
      // console.log(action.payload);
      return state.map((post) => {
        if (post.id === id) {
          return {
            ...post,
            title,
            content,
          };
        }
        return post;
      });
    },
  },
});

export const { addPost, deletePost, editPost } = posts.actions;
export default posts;
