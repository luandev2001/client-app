import { LoginType, UserTokenSession } from "../utils/types/authTypes";
import { setUser } from "../store/user/userSlice";
import { toCookieName } from "../utils/helpers/processHelper";
import Cookies from "js-cookie";
import { CLIENT_ID } from "../utils/request/baseRequest";
import { CookieConstant, PageConstant } from "../utils/constants";
import { login } from "../store/auth/authSlice";
import AuthRequest from "../utils/request/auth-service/authRequest";
import { Dispatch } from "react";

export const processLogin = (data: UserTokenSession, dispatch: Dispatch<any>) => {

    let toPage: string = "";
    switch (data.type) {
        case LoginType.OTP:
            toPage = PageConstant.CHECK_OTP;
            break;
        case LoginType.PIN:
            toPage = PageConstant.CHECK_PIN;
            break;
        case LoginType.FINAL:
            toPage = PageConstant.DASHBOARD;
            Cookies.set(toCookieName([CLIENT_ID, CookieConstant.ACCESS_TOKEN]), data.token);
            AuthRequest.V1.Everyone.getMe(data.token).then((result) => result?.data?.data &&
                dispatch(setUser(result.data))
            );
            break;
    }
    //not save token to localStorage
    const { token, ...user_session } = data;
    localStorage.setItem(toCookieName([CLIENT_ID, CookieConstant.USER_SESSION]), JSON.stringify(user_session));
    dispatch(login(data));
    window.location.href = toPage;
}
