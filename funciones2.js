//function cuidadoConElConsoleLog(nombre) {
//    console.log(nombre);
//    return nombre;
//}

//function otraFuncion() {
//    return (
//        "El nombre retornado por la funcion cuidadoConElConsoleLog es = " + 
//        cuidadoConElConsoleLog("Franco")
//    );
//}

// Creamos una nueva funcion en el que cambiamos el orden del return y el console.log

function cuidadoConElReturn(nombre) {
    return nombre;
    console.log(nombre);
}