export type Fruit = {
    name: string;
    id: number;
    family: string;
    order: string;
    genus: string;
    nutritions: Nutritions
}

export type Nutritions = {
    calories: number
    fat: number
    sugar: number
    carbohydrates: number
    protein: number
}

export interface FruitMinimalProps {
    fruit: Fruit
}

export interface FruitSelectableProps {
    fruit: Fruit,
    selectedFruits: string,
    updateFruits: (fruitName: string, selectedFruits: string) => void 
}

export interface FruitCarrouselProps {
    fruits: Fruit[]
}

export interface FruitSelectableCarrouselProps {
    fruits: Fruit[],
    selectedFruits: string,
    updateFruits: (fruitName: string, selectedFruits: string) => void
}