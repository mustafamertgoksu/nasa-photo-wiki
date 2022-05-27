import { configureStore } from '@reduxjs/toolkit';

import charactersSlice from '../features/characters/charactersSlice';

export const store = configureStore({
  reducer: {
    characters: charactersSlice,
  },
});
