// store.ts
import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './features/postSlice.tsx';


const store = configureStore({
  reducer: {
    posts: postsReducer, // Add your reducer here
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
