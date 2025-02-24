import axios from "axios"
import { handleError, throwAxiosError } from "../helpers/errorHandler"
import { RefreshTokenResponse, UserProfileToken } from "../models/user"

const baseURL = "http://localhost:8080/"

/*
    This functions send rquests to the authentication server to login, register and refresh the token.
    If an error occurs, they construct the corresponding error object and delegate on the handleError function to handle it.
*/

export const loginAPI = async (username: string, password: string) => {
    try {
        const data = await axios.post<UserProfileToken>(baseURL + "auth/login", {
            username: username,
            password: password
        })
        // If an error occurs, the catch block will construct the corresponding error object
        .catch((error) =>  throwAxiosError(error))
        return data
    } catch (error) { 
        //  The error object is passed to the handleError function to handle it
        handleError(error)
    }
}

export const registerAPI = async (username: string, email: string, password: string) => {
    try {
        const data = await axios.post<UserProfileToken>(baseURL + "auth/register", {
            username: username,
            email: email,
            password: password
        })        
        // If an error occurs, the catch block will construct the corresponding error object
        .catch((error) =>  throwAxiosError(error))
        return data
    } catch (error) { 
        //  The error object is passed to the handleError function to handle it
        handleError(error)
    }
}

export const refreshAPI = async () => {
    const refresh_token = localStorage.getItem("refresh_token");
    try {
        const data = await axios.get<RefreshTokenResponse>(baseURL + "auth/refresh", {
            headers: {"Authorization": `Bearer ${refresh_token}`}
        })        
        // If an error occurs, the catch block will construct the corresponding error object
        .catch((error) =>  throwAxiosError(error))
        return data
    } catch (error) { 
        //  The error object is passed to the handleError function to handle it
        handleError(error)
    }
}