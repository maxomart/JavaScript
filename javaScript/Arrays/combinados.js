const personas = [
    {
        nombre:"jose",
        edad: 22,
        pais: "alemania",
    },
    {
        nombre: "sofia",
        edad: 43,
        pais: "argentina",
    },
    {
        nombre: "luca",
        edad:12,
        pais: "bulgaria",
    }
]

for (let i = 0; i < personas.length; i++){
    console.log("=======================")
    console.log("Nombre: " +  personas[i].nombre);
    console.log("Edad: " + personas[i].edad);
    console.log("Pais: " + personas[i].pais);
}   