import { type FormDefinitionProps } from "../../models/form"
import { FormFactory } from "./FormFactory"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useAuth } from "../../context/useAuth"
import { Link } from "react-router"

// Validation schema for the form
// Each validated fild must have a corresponding validateId in the form definition
const validation = Yup.object().shape({
    userName: Yup.string().required("Username is required"),
    // default email() validation was not strict enough
    email: Yup.string()
              .required("Email is required")
              .matches(/^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/, "Invalid email format"),
    password: Yup.string().required("Password is required")
})

// Form definition can be found in src/components/Form/formDefinitions.ts
// It provides the recipe for the elements that will be rendered in the form
export const RegisterForm: React.FC<{formDefinition: FormDefinitionProps[]}> = ({
    formDefinition
}) => {

    const {
        register, 
        handleSubmit, 
        formState: {errors}
    } = useForm({resolver: yupResolver(validation)})

    const {registerUser} = useAuth()

    
    const handleRegister = (
        form: { 
            userName: string 
            password: string 
            email: string 
        }) => {
            registerUser(form.userName, form.email, form.password)
    }

    return (
        <>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-amber-100 rounded-lg shadow md:mb-20 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 data-cy-id="login-title" className="text-xl font-bold leading-tight tracking-tight md:text-2x">
                    Sign up and log in to your account
                </h1>
                <form data-cy-id="login-form" className="space-y-4 md:space-y-6" onSubmit={handleSubmit(handleRegister)}>
                        {formDefinition.map((field, index) => (
                            <div>
                                <FormFactory key={index} field={field} register={register} />
                                {
                                    errors[field.validationId as keyof typeof errors]
                                    ? 
                                    <p data-cy-id={`${field.id}-error`}>{errors[field.validationId as keyof typeof errors]?.message}</p> 
                                    : 
                                    ""
                                }
                            </div>
                        ))}
                </form>
                <p data-cy-id="sign-up-call" className="text-sm font-light text-center">
                    Already have an account?{" "}
                    <Link to="/register" className="font-medium text-primary-600 hover:underline">
                        Sign in
                    </Link>
                </p>
            </div>
          </div>
        </div>
        </>
        
    );
}