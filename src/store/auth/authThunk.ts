import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginRequest } from '../../utils/types/authTypes';
import AuthRequest from '../../utils/request/auth-service/authRequest';
import { processLogin } from '../../services/LoginService';

export const login = createAsyncThunk(
    'auth/login',
    (request: LoginRequest, { dispatch }) => {
        AuthRequest.V1.Everyone.login(request).then(result => result?.data?.data && processLogin(result.data.data, dispatch));
    }
);