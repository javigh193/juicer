import { FruitSelectableCarrouselProps } from "../../models/fruit"
import { FruitSelectable } from "./FruitSelectable"

export const FruitSelectableCarrousel: React.FC<FruitSelectableCarrouselProps> = ({
    fruits,
    selectedFruits,
    updateFruits
}) => {
    return (
        <>
        <div data-cy-id="fruitselectable-carrousel-title" className="flex align-middle justify-center text-xl font-bold">
            <h3>All of fruits are organically farmed! Have a look at the catalog!</h3>
        </div>
        <div className="grid grid-flow-col auto-cols-max overflow-x-scroll gap-2 m-4">
            {fruits.map(fruit => (
                <FruitSelectable key={fruit.id} fruit={fruit} selectedFruits={selectedFruits} updateFruits={updateFruits}/>
            ))}
        </div>
        </>
        
    )
}