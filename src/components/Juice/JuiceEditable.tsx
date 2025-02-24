import { JuiceEditableProps } from "../../models/Juice"

export const JuiceEditable: React.FC<JuiceEditableProps> = ({juice, handleDelete, handleEdit}) => {
  const {name, fruits, creatorName} = juice 

  // Number of ingredients that are rendered in the carrousel card
  const maxIngredientsShown = 3
  return (
    <div data-cy-id="juice-editable">
      <div data-cy-id={`juice-editable-${name}`}
        className="rounded-md bg-lime-100 pb-4 h-full flex flex-col justify-between w-40">
        {/* Top block */}
        <div>
          <img src="applejuice.jfif" alt={`image of a ${name}`} className="rounded-t-md h-40 w-40 object-cover object-top"/>
          <h3 className="mb-2 mt-2 text-xl font-semibold text-dark text-center px-1">
            {name}
          </h3>
          <div className="p-1 text-center sm:p-3 md:p-2 xl:p-1">
            <b>Ingredients:</b>
            <ul data-cy-id="ingredient-list">
            {fruits.slice(0, maxIngredientsShown).map((fruit) => (
              <li
              key={fruit} 
              className="mb-1 text-base leading-relaxed text-body-color">
              {fruit}
              </li> 
            ))}
            {(fruits.length > 3) && <li>...</li>}
            </ul>
          </div>
        </div>

        {/* Bottom block */}
        <div>
          <div className="p-1 mb-2 text-center text-neutral-600 sm:p-3 md:p-2 xl:p-1">
            <p data-cy-id="creator-name">Created by {creatorName}</p>
          </div>
          <div className="flex justify-center">
            <button data-cy-id="delete-button" className="bg-red-300 rounded-sm px-2 py-1 mx-1" onClick={() => handleDelete(name)}>Delete</button>
            <button data-cy-id="edit-button" className="bg-amber-300 rounded-sm px-2 py-1 mx-1" onClick={() => handleEdit(name, fruits.join(','), creatorName)}>Edit</button>
          </div>
        </div>
      </div>  
    </div>
  )
}
