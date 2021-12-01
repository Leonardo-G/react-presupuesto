import { Header } from "./components/Header"
import { PresupuestoContextProvider } from "./context/PresupuestoContext"

function App() {

  return (
      <div>
        <PresupuestoContextProvider>
            <Header />
        </PresupuestoContextProvider>
      </div>
  )
}

export default App
