/// <reference types="react-scripts" />
declare namespace NodeJS {
    interface ProcessEnv {
        REACT_APP_CLIENT_ID: string;
        REACT_APP_AUTH_API_URL: string
    }
}