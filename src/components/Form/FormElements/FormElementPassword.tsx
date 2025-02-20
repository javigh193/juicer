import { PasswordProps } from "../../../models/formTypes"

export const FormElementPassword : React.FC<PasswordProps>  = 
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