import { type Fruit } from "../models/fruit"
import { fetchFruits } from "../services/FruitService"

interface LoaderData {
    title: string
    fruits: Fruit[]
}

export async function clientLoader(): Promise<LoaderData> {
    const fruits = await fetchFruits()
    return {
        title: "About page",
        fruits: fruits
    }
}

interface ComponentProps {
    loaderData: LoaderData
}  

export default function Component({ loaderData }: ComponentProps) {
    return (
        <>
            <h1>{loaderData.title}</h1>
            {loaderData.fruits.map(fruit => (
                <div key={fruit.id}>
                    <h2>{fruit.name}</h2>
                    <p>Family: {fruit.family}</p>
                    <p>Order: {fruit.order}</p>
                    <p>Genus: {fruit.genus}</p>
                    <p>Calories: {fruit.nutritions.calories}</p>
                    <p>Fat: {fruit.nutritions.fat}</p>
                    <p>Sugar: {fruit.nutritions.sugar}</p>
                    <p>Carbohydrates: {fruit.nutritions.carbohydrates}</p>
                    <p>Protein: {fruit.nutritions.protein}</p>
                </div>
            ))}
        </>
        
    )
}