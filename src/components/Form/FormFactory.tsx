import { FormFactoryProps } from "../../models/form";
import { FormElementCreator } from "./FormElements/FormElementCreator";
import { FormElementEmail } from "./FormElements/FormElementEmail";
import { FormElementFruitSelection } from "./FormElements/FormElementFruitSelection";
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
            case 'fruitSelection':
                return <FormElementFruitSelection {...fieldProps} register={register} />
            case 'creator':
                return <FormElementCreator {...fieldProps} register={register} />
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
