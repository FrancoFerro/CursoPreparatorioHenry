/*
// Metodo donde todos los numeros mayores que tres se conviertan en false
Array.prototype.mayoresQueTres = function() {
    var arregloModificado = [];
    // Cuando decimos this se entiende que nos referimos al arreglo
    for(let i = 0; i < this.length; i++) {
        if(this[i] > 3) {
            arregloModificado.push(false); // Le agregamos el false al arreglo usando push
        } else {
            arregloModificado.push(this[i]); // Pusheamos sin hacer cambios
        }
    }

    return arregloModificado;
}

// Ahora tenemos que declarar una variable en este caso llamada arreglo que contenga en este caso los numeros del 1 al 5
var arreglo = [1, 2, 3, 4, 5];
// Guardamos el resultado en una variable llamada nuevoArreglo
var nuevoArreglo = arreglo.mayoresQueTres();

console.log(nuevoArreglo); // [ 1, 2, 3, false, false ]
*/
// Otro ejemplo
// Creamos clase llamada latinoAmerica
class latinoAmerica {
    // Tiene una unica propiedad con el nombre paises, va dentro de su constructor, y esta propiedad es igual a un arreglo vacio
    // No va como propiedad del constructor
    constructor() {
        this.paises = [];
    }
}
// Mediante el prototipo de esta clase crearemos un metodo que nos permita agregar un pais dentro de la propiedad llamada pais
// Entonces la propiedad paises sera un arreglo de strings
// En este caso la funcion recibe por parametro la propiedad pais, la funcion se vendria a llamar agregarPais
latinoAmerica.prototype.agregarPais = function(pais) {
    this.paises.push(pais); // Agregamos el pais al arreglo
};

var continente = new latinoAmerica();
continente.agregarPais("Argentina");
console.log(continente); // latinoAmerica { paises: [ 'Argentina' ] }
console.log(continente.paises); // [ 'Argentina' ]
