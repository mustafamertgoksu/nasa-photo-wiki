import { configureStore } from '@reduxjs/toolkit';

import photoSlice from '../features/photos/photoSlice';

export const store = configureStore({
  reducer: {
    photos: photoSlice,
  },
});
