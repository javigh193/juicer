const inputStyles = "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
const labelStyles = "block mb-2 text-sm font-medium"
const buttonStyles = "w-auto bg-amber-500 hover:bg-amber-700 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-md px-2.5 py-1.5 text-center"

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
    

