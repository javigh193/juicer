import { FruitMinimalProps } from "../../models/fruit"

export const FruitMinimal: React.FC<FruitMinimalProps> = ({fruit}) => {
  const {id, name} = fruit
  return (
    <div data-cy-id="fruit-minimal">
      <div
        data-id={id}
        className="rounded-lg">
        <img src={`${fruit.name}.jfif`} alt={`image of a ${name}`} className="h-40 w-40 object-cover"/>

        <h3 className="mb-4 text-xl font-semibold text-dark text-center">
              {name}
        </h3>
      </div>
    </div>
  )
}