import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // 로그인 상태로 변경하는 함수
    loginSuccess: (state, action) => {
      state.user = action.payload; // 값이 있으면 'true'
    },
    // 로그아웃 상태로 변경하는 함수
    logoutSuccess: (state) => {
      state.user = null; // null은 'false'
    },
  },
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;
export default authSlice;
