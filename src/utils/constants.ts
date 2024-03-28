export const PageConstant = {
    LOGIN: "/login",
    CHECK_OTP: "/check-otp",
    CHECK_PIN: "/check-pin",
    DASHBOARD: "/dashboard"
}

export const CookieConstant = {
    ACCESS_TOKEN: "access-token",
    USER_SESSION: "user_session"
}

export const RequestConstant = {
    V1: "1.0.0",
    // roles
    EVERYONE: "everyone",
    ADMIN: "admin",
    SUPER_ADMIN: "super_admin",
    DEVELOPER: "developer",
    // services
    AUTH_URL: process.env.REACT_APP_AUTH_API_URL + "/auth-service"
}