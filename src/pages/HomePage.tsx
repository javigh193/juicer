import { FruitsCarrousel } from "../components/Fruit/FruitsCarrousel"
import { JuiceMinimalCarrousel } from "../components/Juice/JuiceMinimalCarrousel"
import { type Fruit } from "../models/fruit"
import { Juice } from "../models/juice"
import { fetchFruits } from "../services/fruitService"
import { fetchJuices } from "../services/juiceService"

interface LoaderData {
    fruits: Fruit[]
    juices: Juice[]
}

// eslint-disable-next-line react-refresh/only-export-components
export async function clientLoader(): Promise<LoaderData> {
  const fruits = await fetchFruits()
  const juices = await fetchJuices()
  if (fruits && juices){
    return {
      fruits: fruits,
      juices: juices
    }
  }
  
  // Errors are handled in the API service
  return {
    fruits: [],
    juices: []
  } 
}

interface ComponentProps {
  loaderData: LoaderData
}  

export default function Component({ loaderData }: ComponentProps) {
    return (
        <div data-cy-id="home-page">
          <div data-cy-id="fruit-carrousel" className="mb-4">
            <FruitsCarrousel fruits={loaderData.fruits} />
          </div>
          <div data-cy-id="juice-carrousel" className="mb-4">
            <JuiceMinimalCarrousel juices={loaderData.juices} />
          </div>
        </div>
      )
}