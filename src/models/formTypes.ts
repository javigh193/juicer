
// Contains all the possible properties that can be passed to the form elements
// Note that not all the properties are required for each form element
export type FormDefinitionProps = {
    id : string
    componentType : string
    elementStyles : string 
    type? : string
    validationId? : string 
    labelStyles? : string 
    placeholder? : string 
    label? : string 
    textContent? : string
}

export type TextInputProps = 
    Pick<FormDefinitionProps, 'label' | 'labelStyles' | 'type' | 'elementStyles'| 'id' | 'placeholder' | 'validationId'> 
    & 
    Pick<FormFactoryProps, 'register'>

export type PasswordProps = 
    Pick<FormDefinitionProps, 'label' | 'labelStyles' | 'type' | 'elementStyles'| 'id' | 'placeholder' | 'validationId'>
    & 
    Pick<FormFactoryProps, 'register'>

export type EmailProps = 
    Pick<FormDefinitionProps, 'label' | 'labelStyles' | 'type' | 'elementStyles'| 'id' | 'placeholder' | 'validationId'> 
    & 
    Pick<FormFactoryProps, 'register'>

export type SubmitProps = Pick<FormDefinitionProps, 'id' | 'elementStyles' | 'textContent' >

export type FormFactoryProps = {
    field: FormDefinitionProps
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register: any
}
