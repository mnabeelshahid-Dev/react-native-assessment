// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import RootReducer from './RootReducers';

export const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// ✅ Proper RootState type
export type RootState = ReturnType<typeof store.getState>;
