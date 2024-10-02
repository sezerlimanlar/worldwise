import { BrowserRouter, Routes, Route } from "react-router-dom"
import Product from "./pages/Product"
import Pricing from "./pages/Pricing"
import Homepage from "./pages/Homepage"
function App() {

  return  <div>
    <h1>Hello Router!</h1>
    
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="product" element={<Product/>}/>
    <Route path="pricing" element={<Pricing/>}/>
  </Routes>
  </BrowserRouter>
  </div>
}

export default App
