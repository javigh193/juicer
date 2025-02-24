import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "/api"
})

// Intercept requests that require JWT in headers
axiosInstance.interceptors.request.use(
    (request) => {
        const accessToken = localStorage.getItem("token")
        if (accessToken) {
            request.headers.Authorization = `Bearer ${accessToken}`
        }
        return request;
    },
    (error) => {
        Promise.reject(error)
    }
)