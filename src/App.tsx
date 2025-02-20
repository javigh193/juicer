import { Footer } from "./components/Footer/Footer"
import { logInFormDefinition } from "./components/Form/formDefinitions"
import { LogInForm } from "./components/Form/LoginForm"
import "./index.css"

const App: React.FC = () => {

    return (
        <>
            <div className="bg-cyan-100">
                <h1 className="text-center text-lg font-bold mt-6">Hola Mundo</h1>
            </div>
            <LogInForm formDefinition={logInFormDefinition} />
            <Footer />
        </>
    )
}

export default App