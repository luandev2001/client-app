export enum LoginType {
    OTP = "OTP", PIN = "PIN", FINAL = "FINAL"
}

export interface UserSession {
    id: string
    username: string
    email: string
    type: string
    sessionId: string
}

export interface UserTokenSession extends UserSession {
    token: string
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