import { type FormDefinitionProps } from "../../models/formTypes"
import { FormFactory } from "./FormFactory"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

// Validation schema for the form
// Each validated fild must have a corresponding validateId in the form definition
const validation = Yup.object().shape({
    name: Yup.string().required("The juice must have a name"),
    fruits: Yup.string().required("The juice must contain at least one fruit"),
    creatorName: Yup.string().required("Name of the creator is missing")
})

// Form definition can be found in src/components/Form/formDefinitions.ts
// It provides the recipe for the elements that will be rendered in the form
export const JuiceCreationForm: React.FC<{formDefinition: FormDefinitionProps[]}> = ({
    formDefinition
}) => {

    const {
        register, 
        handleSubmit, 
        formState: {errors}
    } = useForm({resolver: yupResolver(validation)})

    const createJuice = () => {return null}

    const handleCreate = () => {
        createJuice()
    }

    return (
        <>
        <div className="flex flex-col justify-self-center text-center overflow-hidden">
            <h2 data-cy-id="jucingstation-title" className="text-lg">Welcome to the Juicing Station! Enjoy the squeeze!</h2>
            <div data-cy-id='juice-creation-form' className="flex flex-col items-center justify-center px-5 my-5 py-5 mx-auto bg-amber-100 rounded-lg">
                <form className="space-y-4" onSubmit={handleSubmit(handleCreate)}>
                    {formDefinition.map((field, index) => (
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