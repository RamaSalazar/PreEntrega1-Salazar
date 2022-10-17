import NavBar from "./Components/Header/NavBar"
import {ItemListContainer} from "./Components/Header/ItemListContainer"
import ContCart  from "./Components/Header/ItemCount"

const App = () => {
  const msj = "A continuacion te mostraremos todo lo que tenemos para vos"
  const msjCart = "Agregaste correctamente tu producto"
  return(
    <>
      <NavBar />
      <ItemListContainer gretting={msj}/>
      <ContCart stock={10} onAdd={msjCart}/>
    </>
  )
}

export default App 

