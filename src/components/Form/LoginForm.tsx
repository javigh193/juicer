import { type FormDefinitionProps } from "../../models/formTypes";
import { FormFactory } from "./FormFactory";


export const LogInForm: React.FC<{formDefinition: FormDefinitionProps[]}> = ({
    formDefinition
}) => {
    return (
        <>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-amber-100 rounded-lg shadow md:mb-20 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 data-cy-id="login-title" className="text-xl font-bold leading-tight tracking-tight md:text-2x">
                    Sign in to your account
                </h1>
                <form data-cy-id="login-form" className="space-y-4 md:space-y-6">
                    {formDefinition.map((field, index) => (
                        <FormFactory key={index} field={field} />
                    ))}
                </form>
                <p data-cy-id="sign-up-call" className="text-sm font-light text-center">
                    Don’t have an account yet?{" "}
{/*                     <Link to="/register" className="font-medium text-primary-600 hover:underline">
                        Sign up
                    </Link> */}
                </p>
            </div>
          </div>
        </div>
        </>
        
    );
}