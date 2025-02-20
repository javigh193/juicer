import { TextInputProps } from "../../../models/formTypes"

export const FormElementTextInput : React.FC<TextInputProps>  = 
({
    label,
    labelStyles,
    type,
    elementStyles: inputStyles,
    id,
    placeholder,
    validationId

}) => {
    
    return (
        <div>
            <label data-cy-id={`${id}-label`} htmlFor={validationId} className={labelStyles}>
                {label}
            </label>
            <input
            type={type}
            id={id}
            className={inputStyles}
            placeholder={placeholder}
            />
      </div>
    )
} 