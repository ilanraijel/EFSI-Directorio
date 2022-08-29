import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Personas from './Personas';

function Home() {
    let nombre=[]
    Personas.forEach(persona=>{
       nombre.push(<li class="list-group-item">{persona.nombre}</li>)

    })
    return (
        <ul class="list-group">
            {nombre}
        </ul>
    );
}

export default Home;