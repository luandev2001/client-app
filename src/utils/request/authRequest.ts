import { LoginRequest } from "../types/authTypes"
import axiosInstance, { toPath } from "./baseRequest"
import { CHECK_OTP_URL, CHECK_PIN_URL, LOGIN_URL, RESET_OTP_URL } from "./urls/authUrls"

export const checkOTPRequest = (request: LoginRequest) => {
    return axiosInstance.post(LOGIN_URL, request)
}

class AuthRequest {
    static login(request: LoginRequest) {
        return axiosInstance.post(LOGIN_URL, request)
    }

    static checkOtp(sessionId: string, code: string) {
        return axiosInstance.get(toPath([CHECK_OTP_URL, sessionId, code]))
    }

    static checkPin(sessionId: string, code: string) {
        return axiosInstance.get(toPath([CHECK_PIN_URL, sessionId, code]))
    }

    static reset_otp(sessionId: string) {
        return axiosInstance.get(toPath([RESET_OTP_URL, sessionId]))
    }
}

export default AuthRequest