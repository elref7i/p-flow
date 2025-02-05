import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const userReducer = createSlice({
  name: 'user',
  initialState: {
    token: 0,
  },
  reducers: {},
  extraReducers: function (builder) {},
});

export default userReducer.reducer;
