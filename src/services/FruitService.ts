import axios from "axios"
import { handleError, throwAxiosError } from "../helpers/errorHandler"
import { type Fruit } from "../models/fruit"

/*
    If an error is catched, it is analyzed and a custom error object is passed
    to the handler to perform the neccessary operations.
*/

// GET all the fruits through an endpoint proxy to a third party API
export const fetchFruits = async () => {
    try {
        const res = await axios.get<Fruit[]>("/api/v1/fruits")
        .catch((error) =>  throwAxiosError(error))
        if (res) {return  res.data}
    } catch (error) {
        handleError(error)
    }
}