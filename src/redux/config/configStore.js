import { configureStore } from '@reduxjs/toolkit';
import todosSlice from '../modules/todosSlice';
import userSlice from '../modules/userSlice';

const store = configureStore({
  reducer: {
    todos: todosSlice,
    users: userSlice
  }
});

export default store;
