const inputStyles = "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
const labelStyles = "block mb-2 text-sm font-medium"
const buttonStyles = "w-auto bg-amber-500 hover:bg-amber-700 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-md px-2.5 py-1.5 text-center"


// Form definitions provide the FormFactory the recipe to create the form fields

// Form definition for the login form
export const logInFormDefinition = [
    {
        type: "text", 
        id: "username",
        validationId: "userName", 
        elementStyles: inputStyles, 
        labelStyles: labelStyles, 
        placeholder: "Username", 
        label: "Username", 
        componentType: 'text'
    },

    {
        type: "password", 
        id: "password", 
        validationId: "password",
        elementStyles: inputStyles,
        labelStyles: labelStyles, 
        placeholder: "••••••••", 
        label: "Password", 
        componentType: 'password'
    },

    {
        id: "sign-in",
        elementStyles: buttonStyles,
        textContent: "Sign-in",
        componentType: "submit"
    }
]

// Form definition for the registration form
export const registerFormDefinition = [
    {
        type: "text", 
        id: "username",
        validationId: "userName", 
        elementStyles: inputStyles, 
        label: "Username", 
        labelStyles: labelStyles, 
        placeholder: "Username", 
        componentType: 'text'
    },

    {
        type: "email", 
        id: "email", 
        validationId: "email",
        elementStyles: inputStyles,
        label: "Email", 
        labelStyles: labelStyles, 
        placeholder: "Email",      
        componentType: 'email'
    },

    {
        type: "password", 
        id: "password", 
        validationId: "password",
        elementStyles: inputStyles,
        label: "Password", 
        labelStyles: labelStyles, 
        placeholder: "••••••••", 
        componentType: 'password'
    },

    {
        id: "sign-in",
        elementStyles: buttonStyles,
        textContent: "Sign-in",
        componentType: "submit"
    }
]

// Form definition for the juice creation form
export const juiceCreationFormDefinition = [
    {
        type: "text", 
        id: "name",
        validationId: "name", 
        elementStyles: inputStyles, 
        label: "Name", 
        labelStyles: labelStyles, 
        placeholder: "Name", 
        componentType: 'text'
    },

    {
        type: "text", 
        id: "fruits", 
        validationId: "fruits",
        elementStyles: inputStyles,
        label: "Choose your fruits from our catalog above", 
        labelStyles: labelStyles, 
        placeholder: "Fruits",      
        componentType: 'text'
    },

    {
        type: "hidden", 
        id: "creatorName", 
        validationId: "creatorName",
        elementStyles: "hidden",
        componentType: 'text'
    },

    {
        id: "creation-submit-button",
        elementStyles: buttonStyles,
        textContent: "Squeeze",
        componentType: "submit"
    }
]
    

