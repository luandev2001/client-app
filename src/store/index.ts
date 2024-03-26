import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';
import userSlice from './user/userSlice';

const reducers = combineReducers({
    auth: authSlice,
    user: userSlice
});

export const store = configureStore({
    reducer: reducers
});
export type RootState = ReturnType<typeof store.getState>;