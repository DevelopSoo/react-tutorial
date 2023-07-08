import { configureStore, createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: { name: "kim", age: 12 },
  reducers: {
    changeName: (state) => {
      state.name = "park";
    },
    increaseAge: (state, action) => {
      state.age += action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    user: user.reducer,
  },
});

export const { changeName, increaseAge } = user.actions;

export default store;
