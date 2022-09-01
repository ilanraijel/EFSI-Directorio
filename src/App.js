import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./Layout";
import Home from "./Home";
import Personas from "./Personas";
import Estadisticas from "./Estadisticas";
import Contacto from "./Contacto";
import Estadisticass from "./Persona";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />}></Route>
            <Route path="personas/:id" element={<Personas/>}></Route>
            <Route path="estadisticas" element={<Estadisticas/>}></Route>
            <Route path="contacto" element={<Contacto/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
