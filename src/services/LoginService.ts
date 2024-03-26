import { useDispatch } from "react-redux";
import { LoginType, UserSession } from "../utils/types/authTypes";
import { setUser } from "../store/user/userSlice";
import AuthRequest from "../utils/request/authRequest";

export const processLogin = (data: UserSession, code: string = "") => {
    switch (data?.type) {
        case LoginType.OTP:
            AuthRequest.checkOtp(data.sessionId, code)
            break
        case LoginType.PIN:
            AuthRequest.checkPin(data.sessionId, code)
            break
        case LoginType.FINAL:

            break; // Thêm break để kết thúc mỗi case
    }

}
