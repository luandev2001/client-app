import { RequestConstant } from "../../constants";
import { toPath } from "../../helpers/processHelper";

const AuthUrl = {
    V1: (() => {
        const EVERYONE = toPath([RequestConstant.AUTH_URL, RequestConstant.EVERYONE]);
        return {
            EVERYONE: {
                LOGIN_URL: toPath([EVERYONE, "auths", "login"]),
                RESET_OTP_URL: toPath([EVERYONE, "auths", "reset_otp"]),
                CHECK_OTP_URL: toPath([EVERYONE, "auths", "check_otp"]),
                CHECK_PIN_URL: toPath([EVERYONE, "auths", "check_pin"]),
                GET_ME: toPath([EVERYONE, "users", "me"])
            }
        };
    })()
}
export default AuthUrl