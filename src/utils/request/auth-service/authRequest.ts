import { toPath } from "../../helpers/processHelper"
import { LoginRequest } from "../../types/authTypes"
import axiosInstance from "../baseRequest"
import AuthUrl from "../urls/AuthUrl"

class AuthRequest {
    static V1 = class {
        static Everyone = class {
            static login(request: LoginRequest) {
                return axiosInstance.post(AuthUrl.V1.EVERYONE.LOGIN_URL, request)
            }

            static checkOtp(sessionId: string, code: string) {
                return axiosInstance.get(toPath([AuthUrl.V1.EVERYONE.CHECK_OTP_URL, sessionId, code]))
            }

            static checkPin(sessionId: string, code: string) {
                return axiosInstance.get(toPath([AuthUrl.V1.EVERYONE.CHECK_PIN_URL, sessionId, code]))
            }

            static resetOtp(sessionId: string) {
                return axiosInstance.get(toPath([AuthUrl.V1.EVERYONE.RESET_OTP_URL, sessionId]))
            }
            static getMe(token: string) {
                return axiosInstance.get(AuthUrl.V1.EVERYONE.GET_ME, { headers: { "Authorization": token } })
            }
        }
    }
}

export default AuthRequest