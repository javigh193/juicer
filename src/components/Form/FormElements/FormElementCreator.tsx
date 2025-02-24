import { CreatorInputProps } from "../../../models/form"

export const FormElementCreator : React.FC<CreatorInputProps> = 
    ({register, ...props}) => {
        const {        
            type,
            elementStyles,
            id,
            validationId,
            value,
        } = props

        return (
            <>
                <input
                type={type}
                id={id}
                className={elementStyles}
                value={value}
                {...register(validationId)}
                />
            </>
        )
} 