import { EmailProps } from "../../../models/form"

export const FormElementEmail : React.FC<EmailProps>  = 
({register, ...props}) => {
    const {        
        label,
        labelStyles,
        type,
        elementStyles,
        id,
        placeholder,
        validationId,
    } = props 
    
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
            {...register(validationId)}
            />
      </div>
    )
} 