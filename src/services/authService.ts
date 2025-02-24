import axios from "axios"
import { handleError } from "../helpers/errorHandler"
import { RefreshTokenResponse, UserProfileToken } from "../models/User"

const baseURL = "http://localhost:8080/"

export const loginAPI = async (username: string, password: string) => {
    try {
        const data = await axios.post<UserProfileToken>(baseURL + "auth/login", {
            username: username,
            password: password
        })
        return data;
    } catch (error) {
        handleError(error);
    }
};

export const registerAPI = async (username: string, email: string, password: string) => {
    try {
        const data = await axios.post<UserProfileToken>(baseURL + "auth/register", {
            username: username,
            email: email,
            password: password
        })
        return data;
    } catch (error) {
        handleError(error);
    }
};

export const refreshAPI = async () => {
    const refresh_token = localStorage.getItem("refresh_token");
    try {
        const data = await axios.get<RefreshTokenResponse>(baseURL + "auth/refresh", {headers: {"Authorization": `Bearer ${refresh_token}`}});
        return data;
    } catch (error) {
        handleError(error);
    }
}