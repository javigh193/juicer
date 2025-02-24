import axios from "axios"
import { axiosInstance } from "../helpers/axiosInstance"
import { toast } from "react-toastify"
import { Juice } from "../models/juice"
import { handleError, throwAxiosError } from "../helpers/errorHandler"

/*
    axiosInstance is used when the request needs to be authenticated.
    The instance provides the necessary headers to authenticate the request.
    If an error is catched, it is analyzed and a custom error object is passed
    to the handler to perform the neccessary operations.
*/

// GET all the juices from the db
export const fetchJuices = async () => {
    try {
        const res = await axios.get<Juice[]>("/api/v1/juices")
        .catch((error) =>  throwAxiosError(error))
        if (res) {return  res.data}
    } catch (error) {
        handleError(error)
    }
}

// POST the data to create a new juice in the db
export const createJuice = async(name: string, fruits: string, creatorName: string) => {
    try {
        const fruitNames = fruits.split(',').map(fruitName => fruitName.trim())
        
        const res = await axiosInstance.post("/v1/juices", {name: name, fruits: fruitNames, creatorName: creatorName })
        .catch((error) =>  throwAxiosError(error))

        if (res) {
            toast.success("Juice created successfuly!", {position: "top-center"})
            return  res.data
        }
    } catch (error) {
        handleError(error)
    }
}

// GET all the juices created by the logged in user
export const findByCreator = async(creatorName: string) => {
    try {
        const res = await axiosInstance.get("/v1/juices/creator/" + creatorName)
        .catch((error) =>  throwAxiosError(error))
    
        if (res) {
            return  res.data
        }
    } catch (error) {
        handleError(error)
    }
}

// Sends the name o a juice to DELETE it from the db
export const deleteJuice = async(juiceName: string) => {
    try {
        const res = await axiosInstance.delete("/v1/juices/" + juiceName)
        .catch((error) =>  throwAxiosError(error))

        if (res) {
            toast.success("Juice deleted successfuly!", {position: "top-center"})
            return  true
        }
    } catch (error) {
        handleError(error)
    }
}

// Sends the data to UPDATE an existing juice in the db
export const updateJuice = async(name: string, fruits: string, creatorName: string) => {
    try {
        const fruitNames = fruits.split(',').map(fruitName => fruitName.trim())

        const res = await axiosInstance.put("/v1/juices", {name: name, fruits: fruitNames, creatorName: creatorName })
        .catch((error) =>  throwAxiosError(error))
        
        if (res) {
            toast.success("Juice updated successfuly!", {position: "top-center"})
            return res.data
        }
    } catch (error) {
        handleError(error)
    }
}