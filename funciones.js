//function sumaTres(x) {
//    console.log(x + 3);
//}

//sumaTres(5);

// Primer Ejemplo para declarar una funcion

function sumaTres(x) {
    return x + 3;
}

// Segunda, guardando la funcion en una variable

var sumaTres = function (x) {
    return x + 3;
};

// Tercera, usando la funcion de flecha

var sumaTres = (x) => {
    return x + 3;
};

// OJO CON CONFUNDIR RETURN CON CONSOLE.LOG

//EJEMPLO ERROR

var animal = "caballo";
console.log(animal) // caballo

// Lo que hace console.log es ayudar al programador a ver el resultado
// Ninguna aplicacion o programa real deberia tener un console.log dentro de su codigo

// Por otro lado tenemos el RETURN, fundamental para toda funcion ya que es la instruccion que va a 
// indicar que valor nos debe devolver
