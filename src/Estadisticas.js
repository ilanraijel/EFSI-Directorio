import { getByPlaceholderText } from "@testing-library/react";
import Personas from "./Personas";
import { Text, StyleSheet } from 'react';

function mayoresDe35() {
    let may35 = 0;
    for (let i = 0; i < Personas.length; i++){
        if (Personas[i].edad >= 35){
            may35++;
        }
    }
    return may35
}

function mayor() {
    let mayor = 0
    let dataMayor=[]
    for (let i = 0; i < Personas.length; i++){
        if (Personas[i].edad > mayor){
            dataMayor = Personas[i]
            mayor = Personas[i].edad
        }
    }
    return dataMayor;
}

function Estadisticas (){
    let data=[]
    Personas.forEach(persona=>{
       data.push(<li class="list-group-item">{persona.nombre}, {persona.apellido}, {persona.email}, {persona.edad}</li>)
    })
    let personaMayor = mayor()

    return(

        <ul class="list-group">
        Hay {mayoresDe35()} personas mayores a 35 años<br></br><br></br>
        La persona mayor tiene {personaMayor.edad} y su nombre es {personaMayor.nombre}
        </ul>
    )
}
export default Estadisticas;