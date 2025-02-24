import { useEffect, useState} from "react"
import './juicingStation.css'
import { Juice } from "../../models/Juice"
import { Fruit } from "../../models/fruit"
import { deleteJuice, findByCreator, updateJuice } from "../../services/juiceService"
import { fetchFruits } from "../../services/fruitService"
import { FruitSelectableCarrousel } from "../Fruit/FruitsCarrouselSelectable"
import { JuiceCreationForm } from "../Form/JuiceCreationForm"
import { juiceCreationFormDefinition } from "../Form/formDefinitions"
import { JuiceEditableCarrousel } from "../Juice/JuiceEditableCarrousel"
import { useAuth } from "../../context/useAuth"


export const JuicingStation: React.FC = () => {
  const [filteredJuices, setFilteredJuices] = useState<Juice[]>([])
  const [fruits, setFruits] = useState<Fruit[]>([])
  const [selectedFruits, setSelectedFruits] = useState<string>('')
  const [editableFruits, setEditableFruits] = useState<string>('')
  const [editableName, setEditableName] = useState<string>('')
  const [editableCreator, setEditableCreator] = useState<string>('')
  const [sync, setSync] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const {user} = useAuth()

  const handleDelete = (name: string) => {
    deleteJuice(name)
    setSync(false)
  }

  const handleEdit = (name: string, fruits: string, creatorName: string) => {
    setEditableName(name)
    setEditableFruits(fruits)
    setEditableCreator(creatorName)
    openModal()
  }

  const confirmUpdate = () => {
    updateJuice(editableName, editableFruits, editableCreator)
    setSync(false)
    closeModal()
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const updateFruits = (fruitName: string, selectedFruits: string) => {
    let fruitNames = selectedFruits.split(',').map(name => name.trim())
    if (fruitNames.includes(fruitName)) {
      fruitNames = fruitNames.filter(name => name !== fruitName)
    } else {
      fruitNames.push(fruitName)
    }
    setSelectedFruits(fruitNames.join(', ').replace(/^, /, ''));
    // This line is a temporal solution to update the form hook
    document.getElementById("fruits")?.focus()
  }

  const updateEditableFruits = (fruitName: string, selectedFruits: string) => {
    let fruitNames = selectedFruits.split(',').map(name => name.trim())
    if (fruitNames.includes(fruitName)) {
      fruitNames = fruitNames.filter(name => name !== fruitName)
    } else {
      fruitNames.push(fruitName)
    }
    setEditableFruits(fruitNames.join(', ').replace(/^, /, ''))
  }

  useEffect(() => {
    const userName = user?.userName ?  user?.userName : ''
   
    if (userName != ''){
      findByCreator(userName)
        .then(res => {
          if (res) {
            setFilteredJuices(res)
            setSync(true)
          }
        })
    }

    if (fruits.length === 0) {
      fetchFruits()
      .then(res => {
        setFruits(res)
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sync])

  return (
    <>
      {/* Carrousel with the fruits that the user can select */}
      <div data-cy-id="fruit-selectable-carrousel" className="mb-2">
        <FruitSelectableCarrousel fruits={fruits} selectedFruits={selectedFruits} updateFruits={updateFruits}/>
      </div>
    
      <JuiceCreationForm formDefinition={juiceCreationFormDefinition} setSync={setSync} selectedFruits={selectedFruits}/>

      {/* Modal window */}
      {isModalOpen && (
        <div id="myModal" className="modal">
          {/* Modal window content */}
          <div className="modal-content rounded-lg">
            <h3 className="text-lg text-center font-bold">{editableName}</h3>
            <p className="text-center">Created by {editableCreator}</p>
            <p className="text-center font-bold">Ingredients</p>
            <p className="text-center">{editableFruits.split(',').join(', ')}</p>
            <div data-cy-id="juice-editing-carrousel" className="mb-2 mt-2">
              <FruitSelectableCarrousel fruits={fruits} selectedFruits={editableFruits} updateFruits={updateEditableFruits}/>
            </div>
            <div className="flex justify-center">
              <button 
                data-cy-id="confirm-edit-button"
                className="w-auto bg-amber-500 hover:bg-amber-700 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-md px-2.5 py-1.5 text-center mx-2"
                onClick={confirmUpdate}>
                Confirm changes
              </button>
              <button
                data-cy-id="close-modal-button" 
                className="w-auto bg-red-300 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-md px-2.5 py-1.5 text-center mx-2" 
                onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/*Carrousel with the juices created by the user*/}
      <div data-cy-id="juice-editable-carrousel" className="flex justify-center align-baseline">
        <JuiceEditableCarrousel juices={filteredJuices} handleDelete={handleDelete} handleEdit={handleEdit} />
      </div>
    </>
  )
}
  