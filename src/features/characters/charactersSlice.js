import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCharacters = createAsyncThunk(
  'characters/getCharacters',
  async () => {
    const res = await axios(`${process.env.REACT_APP_API_URL}`);
    return res.data;
  }
);

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    items: [],
  },
  reducers: {},
  extraReducers: {
    [getCharacters.fulfilled]: (state, action) => {
      state.items = action.payload;
    },
  },
});

export default charactersSlice.reducer;
