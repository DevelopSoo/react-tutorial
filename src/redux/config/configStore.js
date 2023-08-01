import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../slices/todosSlice";
import loginSignupReducer from "../slices/loginSlice";
const store = configureStore({
  reducer: {
    할일들: todosReducer, //todosSlice 리듀서를 할일들로 등록
    loginSignup: loginSignupReducer,
  },
});
export default store;
