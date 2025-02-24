import { useState } from "react";
import { FruitSelectableProps } from "../../models/fruit";

export const FruitSelectable: React.FC<FruitSelectableProps> = ({fruit, selectedFruits, updateFruits}) => {
  const {id, name} = fruit; 
  
  const [isSelected, setIsSelected] = useState(false);

  const toggleFruitSelected = () => {
    setIsSelected(!isSelected);
    updateFruits(fruit.name, selectedFruits);
  }

  return (
    <div data-cy-id="fruit-selectable">
      <div
        data-cy-id="clickable-div"
        data-id={id}
        className={isSelected? "bg-amber-200" : "" + "rounded-lg"}
        onClick={toggleFruitSelected}
        >
        <img src={`${fruit.name}.jfif`} alt={`image of a ${name}`} className="h-40 w-40 object-cover" />
        <h3 className="mb-4 text-xl font-semibold text-dark text-center">
              {name}
        </h3>
      </div>
    </div>
  )
}
