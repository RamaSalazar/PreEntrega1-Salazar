import NavBar from "./Components/Header/NavBar"
import {ItemListContainer} from "./Components/Header/ItemListContainer"
import {ItemDetailContainer} from "./Components/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CustomProvider } from "./Context/CartContext"
import { Cart } from "./Components/Cart/Cart"
const App = () => {
  const msj = "A continuacion te mostraremos todo lo que tenemos para vos"
  return(
    <>
    <BrowserRouter>
    <CustomProvider>
    <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer gretting={msj}/>}/>
        <Route path="/categoria/:id" element={<ItemListContainer gretting={msj}/>}/>
        <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart estilo={false} color={'blue'}/>} />
        <Route path="*" element={<ItemListContainer />} />
      </Routes>
    </CustomProvider>
    </BrowserRouter>
    </>
  )
}

export default App 

