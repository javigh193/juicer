import axios from "axios"
import { axiosInstance } from "../helpers/axiosInstance"
import { toast } from "react-toastify"
import { Juice } from "../models/Juice"

export const fetchJuices = async(): Promise<Juice[]> => {
    const res = await fetch("/api/v1/juices")
    if (!res.ok) {
        console.error("Error fetching juices")
        return []
    }
    const juices = await res.json() as Juice[]
    return juices
}

export const createJuice = async(name: string, fruits: string, creatorName: string): Promise<Juice | null> => {
    try {
        const fruitNames = fruits.split(',').map(fruitName => fruitName.trim())
        const res = await axiosInstance.post("/v1/juices", {name: name, fruits: fruitNames, creatorName: creatorName })
        if (!res || res.status !== 201) {
            console.error("Error creating Juice")
            return null
        }
        const juice = await res.data as Juice
        toast.success("Juice created successfuly!", {position: "top-center"})
        return juice
    } catch (error) {
       if (axios.isAxiosError(error)) {
            const err = error.response
            if (err?.status === 400) {
                toast.error("There is already a juice with that name! Please, use a different name for your creation.", {position: "top-center"})
            }
        }
        return null
    }
}

export const findByCreator = async(creatorName: string): Promise<Juice[] | null> => {
    const res = await axiosInstance.get("/v1/juices/creator/" + creatorName)
    if (!res || res.status !== 200) {
        console.error("Error fetching user Juices")
        return null
    }
    const juices = await res.data as Juice[]
    return juices
}

export const deleteJuice = async(juiceName: string): Promise<boolean> => {
    const res = await axiosInstance.delete("/v1/juices/" + juiceName)
    if (!res || res.status !== 200) {
        console.error("Error deleting Juice")
        return false
    }
    toast.success("Juice deleted successfuly!", {position: "top-center"})
    return true
}

export const updateJuice = async(name: string, fruits: string, creatorName: string): Promise<Juice | null> => {
    try {
        const fruitNames = fruits.split(',').map(fruitName => fruitName.trim())
        const res = await axiosInstance.put("/v1/juices", {name: name, fruits: fruitNames, creatorName: creatorName })
        if (!res || res.status !== 200) {
            console.error("Error creating Juice")
            return null
        }
        const juice = await res.data as Juice
        toast.success("Juice updated successfuly!", {position: "top-center"})
        return juice
    } catch (error) {
       if (axios.isAxiosError(error)) {
            toast.error("Unable to update the juice.", {position: "top-center"})
        }
        return null
    }
}