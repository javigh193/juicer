import { type FormDefinitionProps } from "../../models/formTypes"
import { FormElementPassword } from "./FormElements/FormElementPassword"
import { FormElementSubmit } from "./FormElements/FormElementSubmit"
import { FormElementTextInput } from "./FormElements/FormElementTextInput"


export const FormFactory : React.FC<{field : FormDefinitionProps}> = ({field}) => {
    const {componentType, ...fieldProps} = field
    const renderFieldComponent = () => {
        switch (componentType) {
            case 'text':
                return <FormElementTextInput {...fieldProps} />
            case 'password':
                return <FormElementPassword {...fieldProps} />
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
