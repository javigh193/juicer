import { type FormDefinitionProps } from "../../models/form"
import { FormFactory } from "./FormFactory"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { createJuice } from "../../services/juiceService"
import { useAuth } from "../../context/useAuth"

const validation = Yup.object().shape({
    name: Yup.string().required("The juice must have a name"),
    fruits: Yup.string().required("The juice must contain at least one fruit"),
    creatorName: Yup.string().required("Name of the creator is missing")
})

export const JuiceCreationForm: React.FC<{
    formDefinition: FormDefinitionProps[],
    selectedFruits: string, 
    setSync: React.Dispatch<React.SetStateAction<boolean>>}> = ({
        formDefinition,
        selectedFruits,
        setSync
    }) => {

        const {
            register, 
            handleSubmit, 
            formState: {errors}
        } = useForm({resolver: yupResolver(validation)})

        const {user} = useAuth()

        const handleCreate = (
            form: { 
                name: string 
                fruits: string 
                creatorName: string 
            }) => {
                createJuice(form.name, form.fruits, form.creatorName)
                setSync(false)
        }
        
        return (
            <>
            <div className="flex flex-col justify-self-center text-center overflow-hidden">
                <h2 data-cy-id="jucingstation-title" className="text-lg">Welcome to the Juicing Station! Enjoy the squeeze!</h2>
                <div data-cy-id='juice-creation-form' className="flex flex-col items-center justify-center px-5 my-5 py-5 mx-auto bg-amber-100 rounded-lg">
                    <form className="space-y-4" onSubmit={handleSubmit(handleCreate)}>
                        {formDefinition.map((field) => {
                        // If the field is the fruits field, we update the value with the selected fruits 
                        if (field.id === "fruits") {
                            field.value = selectedFruits
                        // If the field is the creatorName field, we update the value with the user name
                        } else if (field.id === "creatorName") {
                            field.value = user?.userName ? user?.userName : ''
                        }
                        return field    
                        }).map((field, index) => (
                            <div>
                                <FormFactory key={index} field={field} register={register} />
                                {
                                    errors[field.validationId as keyof typeof errors]
                                    ? 
                                    <p data-cy-id={`${field.id}-error`}>{errors[field.validationId as keyof typeof errors]?.message}</p> 
                                    : 
                                    ""
                                }
                            </div>
                        ))}
                    </form>
                </div>
            </div>
            </>   
        )
}