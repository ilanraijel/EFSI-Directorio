import React from "react";
import { useParams } from "react-router-dom";
import Personas from './Personas';

function Persona() {
    const { id } = useParams();
    return (
        <div>
            Nombre: {Personas[id-1].nombre} <br></br>
            Apellido: {Personas[id-1].apellido} <br></br>
            Email: {Personas[id-1].email} <br></br>
            Edad: {Personas[id-1].edad} <br></br>
        </div>
    );
}

export default Persona;