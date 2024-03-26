export enum LoginType {
    OTP = "OTP", PIN = "PIN", FINAL = "FINAL"
}

export interface UserSession {
    id: string
    username: string
    email: string
    type: LoginType
    sessionId: string
}

export interface User {
    id: string
    orgId: string
    username: string
    email: string
    userRoles: Record<string, UserRole>
}

export interface UserRole {
    id: string
    role: string
}

export interface LoginRequest {
    username: string
    password: string
}