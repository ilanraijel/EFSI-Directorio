import React from "react";
import Form from "react-bootstrap";

function Contacto(){
    return (
        <form>
          <label>
            Nombre: 
          </label>
          <input type="text"/><br></br><br></br>
          <label>
            Apellido: 
          </label>
          <input type="text"/><br></br><br></br>
          <label>
            Email: 
          </label>
          <input type="email"/><br></br><br></br>
          <label>
            Edad: 
          </label>
          <input type="number"/><br></br><br></br>
          <input type="submit" value="Enviar" />
        </form>
      );
    }

export default Contacto;