import { Gastado } from "./components/Gastado";
import { Header } from "./components/Header";
import { MainContainer } from "./components/MainContainer";
import {  PresupuestoContextProvider } from "./context/PresupuestoContext";

function App() {

  return (
      <div>
        <PresupuestoContextProvider>
            <MainContainer />
        </PresupuestoContextProvider>
      </div>
  )
}

export default App
