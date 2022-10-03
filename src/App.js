import NavBar from "./Components/Header/NavBar"
import Mensaje from "./Components/Header/ItemListContainer"

const App = () => {
  const msj = "A continuacion te mostraremos todo lo que tenemos para vos"
  return(
    <>
      <NavBar />
      <Mensaje gretting={msj}/>
    </>
  )
}

export default App 