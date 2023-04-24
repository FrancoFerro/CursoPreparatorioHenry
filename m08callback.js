/*var devuelvoUsuario = function () {
    return "Franco";
};

var devuelvoSaludo = function () {
    return "Hola";
};

var saludar = function (cb1, cb2) {
    return cb1() + " " + cb2();
};

var resultado = saludar(devuelvoSaludo, devuelvoUsuario);
console.log(resultado);
*/

/*
var devuelvoFrase = function (comida) {
    return "Hoy quiero comer: " + comida;
};

var hablar = function (comida, cb) {
    return cb(comida);
};

var fraseFinal = hablar("Pizza", devuelvoFrase);
console.log(fraseFinal);
*/
// nombre[0].toUpperCase() + nombre.slice(1)
function mayuscula(nombre) {
    // toUpperCase convierte en mayuscula la letra que le indiquemos, la primer letra es la posicion 0
    // slice lo que hace es mostrar el resto de la cadena desde la posicion que le indiquemos a la cadena,
    // en este caso nombre[0], si queremos hacer otra letra en especifico en mayuscula debemos repetir la accion y unirlas con un +
    // En caso de querer convertir TODO EL STRING en mayuscula debemos simplemente usar nombre.toUpperCase();
    // es importante convinarlos ya que de lo contrario toUpperCase mostrara solo una parte 
    return nombre[0].toUpperCase() + nombre.slice(1);
}

console.log(mayuscula("franco"));
