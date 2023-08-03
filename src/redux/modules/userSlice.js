import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '',
    userName: '',
    email: '',
    isLogin: false
  }
];

const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    isLogin(state, action) {
      return state.map((user) => {
        if (user.id !== action.payload.id) {
          return user;
        } else {
          return action.payload;
        }
      });
    },

    setUser(state, action) {
      return (state = action.payload);
    }
  }
});

export const { isLogin, setUser } = userSlice.actions;
export default userSlice.reducer;
