import axios from "axios"
import { toast } from "react-toastify"

/*
    Builds different error objects to be thrown when an error matching the corresponding condition is catched
*/
const errorFactory = function(name: string) {
    return class CustomError extends Error {
        constructor(message: string) {
            super(message);
            this.name = name
        }
    }
}

// Implies that somthing was wrong with the network and the request was sent but no response was received
export const NetworkError = errorFactory("NetworkError")
// Implies that the server was unable to process the request because of some internal error
export const ServerError = errorFactory("ServerError")
// Implies that the client sent a request that was either malformed or contained invalid data to acomplish the expected response
export const ClientError = errorFactory("ClientError")
// Implies that the request was unable to be set up and therefore was not sent
export const RequestError = errorFactory("RequestError")

/* 
    Given an error catched while performing an axios request, this function will analyze it and throw the corresponding 
    custom error to be handled by the handleError function
*/
export const throwAxiosError = function(error: unknown) {
    if(axios.isAxiosError(error)){
        if (error.response) {
            // The request was made and the server responded with a status code that falls out of the range of 2xx
            if (error.response.status === 400) {
                console.log("Bad request")
                throw new ClientError("Bad request")
            } else if (error.response.status === 401) {
                console.log("Invalid credentials")
                throw new ClientError("Invalid credentials")
            } else if (error.response.status === 403) {
                console.log("Forbidden")
                throw new ClientError("Forbidden")
            } else if (error.response.status === 404) {
                console.log("Not found")
                throw new ClientError("Not found")
            } else if (error.response.status === 500) {
                console.log("Internal server error") 
                throw new ServerError("Internal server error")
            }     
        } else if (error.request) {
            // The request was made but no response was received
            console.log("Network error")
            throw new NetworkError("Network error")
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Request error")
            throw new RequestError("Unable to set up request")
        }
    }
}


/*
    Recives a custom error object and performs the actions needed to inform the user and start the internal processes required
    to assess the issue such as logging error information, notifications, etc.
*/
export const handleError = (error: unknown) => {
    if (error instanceof ClientError) {
        console.log("Handling ClientError")
        switch (error.message) {
            case "Bad request":
                toast.info(
                    "Something seems to be affecting the service. Please, try again and if the problem persists we suggest that you clear your browser cache and try again after it.", 
                    {position: "top-center"}
                )
                break
            case "Invalid credentials":
                toast.info(
                    "The credentials you provided are invalid. Please, check them and try again.",
                    {position: "top-center"}
                )
                break
            case "Forbidden":
                toast.info( 
                    "You are not allowed to access this resource. Please, try again with the proper permissions.",
                    {position: "top-center"}
                )
                break
            case "Not found":
                toast.info(
                    "Unable to found what you requested. If you are sure that what you are looking for should be there, please try again and if the problem persists contat the support team.",
                    {position: "top-center"}
                )
                break
            default:
                toast.info(
                    "It seems that there are some difficulties with this service at the moment. Please try again later.", 
                    {position: "top-center"}
                )
        }
    } else if (error instanceof NetworkError) {
        console.log("Handling NetworkError")
        toast.info(
            "It seems that there is some network issue affecting the service. Please check your connection and try again.", 
            {position: "top-center"}
        )
    } else if (error instanceof ServerError) {
        console.log("Handling ServerError")
        toast.info(
            "It seems that there are some difficulties with this service at the moment. Please try again later.", 
            {position: "top-center"}
        )
    } else if (error instanceof RequestError) {
        console.log("Handling RequestError")
        toast.info(
            "It seems that there are some difficulties with this service at the moment. Please try again later.", 
            {position: "top-center"}
        )
    }
}