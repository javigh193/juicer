import { type FormDefinitionProps } from "./formDefinitions"
import { FormElementPassword } from "./FormElements/FormElementPassword"
import { FormElementSubmit } from "./FormElements/FormElementSubmit"
import { FormElementTextInput } from "./FormElements/FormElementTextInput"

interface Props {
    field : FormDefinitionProps
}

export const FormFactory : React.FC<Props> = ({field}) => {
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
