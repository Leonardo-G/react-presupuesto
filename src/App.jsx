import { Gastado } from "./components/Gastado";
import { Header } from "./components/Header";
import {  PresupuestoContextProvider } from "./context/PresupuestoContext";

function App() {
 

  return (
      <div>
        <PresupuestoContextProvider>
            <Header />
            <Gastado />
        </PresupuestoContextProvider>
      </div>
  )
}

export default App
