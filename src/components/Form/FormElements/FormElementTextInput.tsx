interface Props  {
    label? : string
    labelStyles? : string
    type? : string
    elementStyles? : string
    id : string
    placeholder? : string
    validationId? : string
}

export const FormElementTextInput : React.FC<Props>  = 
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