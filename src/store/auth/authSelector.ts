import { RootState } from "../../store";
import { AuthState } from "./authSlice";

export const selectAuthState = (state: RootState): AuthState => state.auth
export const selectToken = (state: RootState): string => selectAuthState(state).token