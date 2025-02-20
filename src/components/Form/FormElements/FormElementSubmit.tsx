import { SubmitProps } from "../../../models/formTypes"

export const FormElementSubmit : React.FC<SubmitProps>  = 
({
    id,
    elementStyles,
    textContent
}) => {
    
    return (
      <div className="flex justify-center">
        <button
            data-cy-id={`${id}-btn`}
            type="submit"
            className={elementStyles}>
            {textContent}
        </button>
      </div>
    )
} 