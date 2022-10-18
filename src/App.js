import NavBar from "./Components/Header/NavBar"
import {ItemListContainer} from "./Components/Header/ItemListContainer"
import ContCart  from "./Components/Header/ItemCount"
import {ItemDetailContainer} from "./Components/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  const msj = "A continuacion te mostraremos todo lo que tenemos para vos"
  const msjCart = "Agregaste correctamente tu producto"
  return(
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer gretting={msj}/>}/>
        <Route path="/categoria/:id" element={<ItemListContainer gretting={msj}/>}/>
        <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
      </Routes>
      <ContCart stock={10} onAdd={msjCart}/>
    </BrowserRouter>
    </>
  )
}

export default App 

