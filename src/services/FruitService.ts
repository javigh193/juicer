import { type Fruit } from "../models/fruit"

export const fetchFruits = async(): Promise<Fruit[]> => {
    const res = await fetch("/api/v1/fruits")
    if (!res.ok) {
        console.error('Error fetching fruits')
        return []
    }
    const fruits = await res.json() as Fruit[]
    return fruits
}