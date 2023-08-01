import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // 로그인되지 않은 상태로 시작할 수 있도록 셋팅
  // 로그인 상태가 아니기 때문에 로그인한 사용자 정보가 없음
  isLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // 로그인 상태로 변경하는 함수
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    // 로그아웃 상태로 변경하는 함수
    logoutSuccess: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;

export default authSlice;
