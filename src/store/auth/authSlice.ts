import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSession, UserTokenSession } from '../../utils/types/authTypes';

export interface AuthState {
    isLoggedIn: boolean;
    token: string
    userSession: UserSession | null; // Customize the user type as needed
}

const initialState: AuthState = {
    isLoggedIn: false,
    token: "",
    userSession: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<UserTokenSession>) {
            state.isLoggedIn = true;
            state.userSession = action.payload
            state.token = action.payload.token
        },
        logout(state) {
            state.isLoggedIn = false;
            state.userSession = null;
            state.token = ""
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;