import { createSlice, nanoid } from "@reduxjs/toolkit";

const postList = createSlice({
  name: "posts",
  initialState: [
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
  ],
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
    deletePost: (state, action) => {},
    updatePost: (state, action) => {},
  },
});

export const { addPost, deletePost, updatePost } = postList.actions;
export default postList;
