import { configureStore } from "@reduxjs/toolkit";
import posts from "./slice/posts";
import authSlice from "./slice/authSlice";

const store = configureStore({
  reducer: { posts: posts.reducer, authSlice: authSlice.reducer },
});

export default store;
