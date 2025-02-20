interface Props  {
    elementStyles : string
    id : string
    textContent? : string
}

export const FormElementSubmit : React.FC<Props>  = 
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