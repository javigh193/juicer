export type FormDefinitionProps = {
    id : string
    componentType : string
    elementStyles : string 
    type : string
    validationId : string 
    labelStyles : string 
    placeholder : string 
    label : string 
    textContent : string
}

export type TextInputProps = Pick<FormDefinitionProps, 'label' | 'labelStyles' | 'type' | 'elementStyles'| 'id' | 'placeholder' | 'validationId' >

export type PasswordProps = Pick<FormDefinitionProps, 'label' | 'labelStyles' | 'type' | 'elementStyles'| 'id' | 'placeholder' | 'validationId' >

export type SubmitProps = Pick<FormDefinitionProps, 'id' | 'elementStyles' | 'textContent' >
