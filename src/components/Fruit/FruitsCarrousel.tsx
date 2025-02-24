import { FruitCarrouselProps } from "../../models/fruit";
import { FruitMinimal } from "./FruitMinimal";


export const FruitsCarrousel: React.FC<FruitCarrouselProps> = ({fruits}) => {
    return (
        <>
        <div data-cy-id="fruit-carrousel-title" className="flex align-middle justify-center text-xl font-bold">
            <h3>All of fruits are organically farmed! Have a look at the catalog!</h3>
        </div>
        <div className="grid grid-flow-col auto-cols-max overflow-x-scroll gap-2 m-4">
            {fruits.map(fruit => (
                <FruitMinimal key={fruit.id} fruit={fruit} />
            ))}
        </div>
        </>
        
    );
}