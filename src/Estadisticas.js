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
    let personasMayores=[]
    for (let i = 0; i < Personas.length; i++){
        if (Personas[i].edad > mayor){
            dataMayor = `${Personas[i].nombre}`
            //dataMayor.push(Personas[i])
            mayor = Personas[i].edad
        } else if (Personas[i].edad == mayor) {
            //dataMayor.push(Personas[i])
            dataMayor = `${dataMayor}, ${Personas[i].nombre}`
        }
    }
    return dataMayor;
}

function menor() {
    let menor = 200
    let dataMenor=[]
    let personasMenores=[]
    for (let i = 0; i < Personas.length; i++){
        if (Personas[i].edad < menor){
            dataMenor = `${Personas[i].nombre}`
            //dataMayor.push(Personas[i])
            menor = Personas[i].edad
        } else if (Personas[i].edad == menor) {
            //dataMayor.push(Personas[i])
            dataMenor = `${dataMenor}, ${Personas[i].nombre}`
        }
    }
    return dataMenor;
}

function Estadisticas (){
    let data=[]
    Personas.forEach(persona=>{
       data.push(<li class="list-group-item">{persona.nombre}, {persona.apellido}, {persona.email}, {persona.edad}</li>)
    })
    let personaMayor = mayor()
    let personaMenor = menor()

    return(

        <ul class="list-group">
        Hay {mayoresDe35()} personas mayores a 35 años<br></br><br></br>
        Persona/s mayor/es: {personaMayor}<br></br><br></br>
        Persona/s menor/res: {personaMenor}
        
        </ul>
    )
}
export default Estadisticas;