import { configureStore } from '@reduxjs/toolkit';

import modeReducer from './features/modeSlice';
import countriesReducer from './features/countriesSlice';

export const store = configureStore({
  reducer: {
    mode: modeReducer,
    countries: countriesReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch