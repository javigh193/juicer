import { FruitSelectionProps } from "../../../models/form"

export const FormElementFruitSelection : React.FC<FruitSelectionProps>  = 
({register, value, ...props}) => {
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
            value={value}
            {...register(validationId)}
            />
      </div>
    )
} 