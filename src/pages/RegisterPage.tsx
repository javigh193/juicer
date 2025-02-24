import { registerFormDefinition } from "../components/Form/formDefinitions"
import { RegisterForm } from "../components/Form/RegisterForm"

export default function Component() {
    return (
        <RegisterForm formDefinition={registerFormDefinition} />
    )
}