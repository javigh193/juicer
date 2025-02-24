import { logInFormDefinition } from "../components/Form/formDefinitions"
import { LogInForm } from "../components/Form/LoginForm"

export default function Component() {
    return (
        <LogInForm formDefinition={logInFormDefinition} />
    )
}