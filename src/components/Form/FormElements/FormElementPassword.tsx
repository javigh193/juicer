import { PasswordProps } from "../../../models/formTypes"

export const FormElementPassword : React.FC<PasswordProps>  = 
({
    label,
    labelStyles,
    type,
    elementStyles,
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
            className={elementStyles}
            placeholder={placeholder}
            />
      </div>
    )
} 