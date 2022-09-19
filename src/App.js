import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./Layout";
import Home from "./Home";
import Persona from "./Persona";
import Estadisticas from "./Estadisticas";
import Contacto from "./Contacto";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />}></Route>
            <Route path="persona/:id" element={<Persona/>}></Route>
            <Route path="estadisticas" element={<Estadisticas/>}></Route>
            <Route path="contacto" element={<Contacto/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
