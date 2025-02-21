import { FormFactoryProps } from "../../models/formTypes";
import { FormElementEmail } from "./FormElements/FormElementEmail";
import { FormElementPassword } from "./FormElements/FormElementPassword"
import { FormElementSubmit } from "./FormElements/FormElementSubmit"
import { FormElementTextInput } from "./FormElements/FormElementTextInput"

// Returns the appropriate form element based on the componentType provided by the form definition
// Form definitions can be found in src/components/Form/formDefinitions.ts
export const FormFactory: React.FC<FormFactoryProps> = ({ field, register }) => {
    const { componentType, ...fieldProps } = field;
    const renderFieldComponent = () => {
        switch (componentType) {
            case 'text':
                return <FormElementTextInput {...fieldProps} register={register}/>
            case 'password':
                return <FormElementPassword {...fieldProps} register={register} />
            case 'email':
                return <FormElementEmail {...fieldProps} register={register} />
            case 'submit':
                return <FormElementSubmit {...fieldProps} />
            default:
                return null
        }
    }

    return (
        <>
            {renderFieldComponent()}
        </>
    )
}
