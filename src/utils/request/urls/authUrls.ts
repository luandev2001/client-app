import { RequestConstant } from "../../constants";
import { toPath } from "../baseRequest";

export const AUTH_SERVICE_URL: string = (() => {
    return toPath([
        process.env.REACT_APP_AUTH_API_URL,
        "auth-service",
        RequestConstant.EVERYONE,
        RequestConstant.V1
    ]);
})();
export const LOGIN_URL: string = AUTH_SERVICE_URL + "auths/login";
export const RESET_OTP_URL: string = AUTH_SERVICE_URL + "auths/reset_otp/";
export const CHECK_OTP_URL: string = AUTH_SERVICE_URL + "auths/check_otp/";
export const CHECK_PIN_URL: string = AUTH_SERVICE_URL + "auths/check_pin/";