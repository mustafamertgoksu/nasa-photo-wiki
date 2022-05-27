import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getDatas = createAsyncThunk('datas/getDatas', async () => {
  const res = await axios(`${process.env.REACT_APP_API_URL}`);
  return res.data;
});

export const photoSlice = createSlice({
  name: 'photos',
  initialState: {
    items: [],
  },
  reducers: {},
  extraReducers: {
    [getDatas.fulfilled]: (state, action) => {
      state.items = action.payload;
    },
  },
});

export default photoSlice.reducer;
