import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userEmail: null,
};

const loginSlice = createSlice({
  name: "loginSignup",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      //회원 가입이되면 actiontype이 true
      state.userEmail = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      //로그아웃을 하면 false가 되게 관리
      state.userEmail = null;
    },
  },
});
const loginReducer = loginSlice.reducer;
export const { login, logout } = loginSlice.actions;
export default loginReducer;
