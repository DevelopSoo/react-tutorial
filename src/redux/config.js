import { configureStore } from "@reduxjs/toolkit";
import posts from "./posts";
import user from "./user";

const store = configureStore({
  reducer: {
    posts: posts.reducer,
    user: user.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
