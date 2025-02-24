import { createContext, useEffect, useState } from "react"
import { toast } from "react-toastify"
import React from "react"
import { jwtDecode } from "jwt-decode"
import { useNavigate } from "react-router"
import { UserProfile } from "../models/user"
import { loginAPI, refreshAPI, registerAPI } from "../services/authService"

type UserContextType = {
    user: UserProfile | null
    registerUser: (username: string, email: string, password: string) => void
    loginUser: (username: string, password: string) => void
    refreshToken: () => void
    logout: () => void
    isLoggedIn: () => boolean
}

type Props = { children: React.ReactNode }

const UserContext = createContext<UserContextType>({} as UserContextType)

export const UserProvider = ({children}: Props) => {
    const navigate = useNavigate()
    const [user, setUser] = useState<UserProfile | null>(null)
    const [isReady, setIsReady] = useState(false)

    useEffect(() => { 
        // Get session token and extract information for the context
        const token = localStorage.getItem("token")
        if (token) {
            try {
                const userObj: UserProfile = {userName: jwtDecode(token).sub}
                if (userObj.userName) {
                    setUser(userObj)
                }
            } catch (error) {                
                console.error(error)
            }
        }

        setIsReady(true)

        // Refreshing token every minute
        const jwtRefreshPeriod: number = 1000 * 30
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const refreshInterval = setInterval(() => refreshToken(), jwtRefreshPeriod);

    }, [])

    const loginUser = async (username: string, password: string) => {
        await loginAPI(username, password).then((res) => {
            if(res) {
                localStorage.setItem("token", res?.data.token)
                localStorage.setItem("refresh_token", res?.data.refresh_token)
                if (res?.data.token) {
                    const userObj: UserProfile = {userName: jwtDecode(res?.data.token).sub}
                    if (userObj.userName) {
                        setUser(userObj)
                        toast.success("Login Success!", {position: "top-center"})
                        navigate("/")
                    }
                } 
            }
        }).catch((err) => {
            toast.warning("Something went wrong...sorry about that", {position: "top-center"});
            console.error(err)
        })
    }

    const registerUser = async (username: string, email:string, password: string) => {
        await registerAPI(username, email, password).then((res) => {
            if(res) {
                localStorage.setItem("token", res?.data.token)
                localStorage.setItem("refresh_token", res?.data.refresh_token);
                if (res?.data.token) {
                    const userObj: UserProfile = {userName: jwtDecode(res?.data.token).sub};
                    if (userObj.userName) {
                        setUser(userObj)
                        toast.success("Login Success!", {position: "top-center"})
                        navigate("/")
                    }
                } 
            }
        }).catch((err) => {
            toast.warning("Something went wrong...sorry about that", {position: "top-center"})
            console.error(err)
        })
    }

    const refreshToken = async () => {
        const refreshToken = localStorage.getItem("refresh_token")
        if (refreshToken) {
            console.log("Refreshing token")
            const date = new Date()
            const expirationTime = jwtDecode(refreshToken).exp
            if (expirationTime) {
                // Timestamp in the token is in seconds since Unix epoch
                const tokenHasExpired = date.getTime() > expirationTime * 1000
                if (!tokenHasExpired) {
                    console.log("Token has not expired")
                    await refreshAPI().then((res) => {
                        if(res?.status === 200) {
                            localStorage.setItem("token", res?.data.token)
                        }
                    }).catch((err) => {
                        console.log(err)                        
                    })
                    return null
                }
            }
            // If the token has expired, is not valid or is not to be found, log out the user
            console.log("Token has expired")
            logout()
            toast.warning("You have been logged out because the session has expired. Please, log in again.", {position: "top-center"})
        }
    }

    // logic with session token
    const isLoggedIn = () => {
        const token = localStorage.getItem("token")
        return !!token && !!user
    }

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("refresh_token")
        setUser(null)
        navigate("/")
    }

    return (
        <UserContext.Provider value={{loginUser, user, logout, isLoggedIn, registerUser, refreshToken}}>
            {isReady ? children : null}
        </UserContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => React.useContext(UserContext)