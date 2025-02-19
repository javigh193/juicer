import { Footer } from "./components/Footer/Footer"
import "./index.css"

const App: React.FC = () => {

    return (
        <>
            <div className="bg-cyan-100">
                <h1 className="text-center text-lg font-bold mt-6">Hola Mundo</h1>
            </div>
            <Footer />
        </>
    )
}

export default App