import { TextInputProps } from "../../../models/formTypes"

export const FormElementTextInput : React.FC<TextInputProps> = 
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
            <>
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
            </>
        )
} 