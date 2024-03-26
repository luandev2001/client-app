import axios, { AxiosError } from "axios";
import Swal from "sweetalert2";
import { WrapperResponse } from "../types/baseTypes";

export const client_id: string = process.env.REACT_APP_CLIENT_ID

export const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
});

export const toPath = (paths: string[]) => {
    return paths.join("/")
}

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
    config.headers["clientId"] = client_id;

    return config;
});

axiosInstance.interceptors.response.use(
    (response) => {
        Toast.fire({ icon: "success", titleText: response.data?.message });
        return response
    },
    (error: AxiosError) => {
        let message: string = 'An error occurred. Please try again later.';
        if (error.response) {
            const errorResponse: WrapperResponse<any> | any = error.response?.data
            message = errorResponse?.message
        }
        Toast.fire({ icon: "error", titleText: message })
    }
)

export default axiosInstance;
