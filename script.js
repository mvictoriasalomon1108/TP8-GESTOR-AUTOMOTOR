let conductores = [];
let vehiculos = [];

function mostrarVista(id) {
    document.getElementById(id).style.display = "flex";
}

funcion filtrar_A1(){
    if (lista_personas.INNERHTML = "No hay personas")
}else{
    div_resultado_personas.INNERHTML = ""
    for(var i = 0, i < lista_personas.length, i++){
        let persona = lista_personas[i];
        if (persona ["tipo_carnet"] === "A1"){
            div_resultados_personas.INNERHTML += "<h2>Nombre" + persona["nombre"] + "<h2>"
            div_resultados_personas.INNERHTML += "<h2>Edad" + persona["edad"] + "<h2>"
            div_resultados_personas.INNERHTML += "<p>Tipo de carnet" + persona["tipo de carnet"] + "<p>"
            div_resultados_personas.INNERHTML += "<p>Seguro" + persona["seguro"] + "<p>"
        }
    }
}
if (lista_vehiculos.length === 0){
    div_resultados_vehiculos.INNERHTML = "No hay autos"
}else{
    div_resultados_vehiculos.INNERHTML = ""
for (let i = 0; i < lista_vehiculos.length; i++){
    let vehiculo = lista_vehiculos[i]
    if (auto["tipo_carnet"]) === "A1"){
        div_resultados_vehiculos.INNERHTMl += "<h2>Marca: " + vehiculo["marca"] + "<h2>"
        div_resultados_vehiculos.INNERHTMl += "<h2>Modelo: " + vehiculo["modelo"] + "<h2>"
        div_resultados_vehiculos.INNERHTMl += "<p>Patente: " + vehiculo["patente"] + "<p>"
        div_resultados_vehiculos.INNERHTMl += "<p>Tipo de carnet: " + vehiculo["tipo_carnet"] + "<p>"
    }
}


document.getElementById("formConductor")
    conductores.push({
        nombre: nombre.value,
        edad: edad.value,
        carnet: carnet.value,
        seguro: seguro.value
 

function mostrarConductores() {
    let tabla = document.getElementById("tablaConductores");
    tabla.innerHTML = "";
                <h>{conductores[i].nombre}</h>
                <h>{conductores[i].edad}</h>
                <h>{conductores[i].carnet}</h>
                <h>{conductores[i].seguro}</h>
                    <button onclick="eliminarConductor)">Eliminar</button>
                
    }
}

function eliminarConductor {
    mostrarConductores();
}


document.getElementById("formVehiculo")

    vehiculos.push({
        marca: marca.value,
        modelo: modelo.value,
        patente: patente.value,
        tipo: tipoVehiculo.value
    }
  
function mostrarVehiculos() {
    let tabla = document.getElementById("tablaVehiculos");
    tabla.innerHTML = "";
                <h>{vehiculos[i].marca}</h>
                <h>{vehiculos[i].modelo}</h>
                <h>{vehiculos[i].patente}</h>
                <h>{vehiculos[i].tipo}</h>
                <h>
                    <button onclick="eliminarVehiculo)">Eliminar</button>
}

function eliminarVehiculo(i) {
    mostrarVehiculos();
}
