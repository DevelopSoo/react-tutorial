import { configureStore } from "@reduxjs/toolkit";
import Items from "../modules/itemSlice";
// 데이터 중앙 저장소 만들기
const store = configureStore({
  reducer: {
    // 2. 다른 곳에서 사용할 수 있게 configureStore에 넣어주기
    Items,
  },
});

export default store;
