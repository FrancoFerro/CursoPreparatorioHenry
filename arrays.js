/*var listaDeCompras = [];
listaDeCompras[3] = "Tomates";
listaDeCompras[1] = "Lechuga"

console.log(listaDeCompras);

// Si deseamos ver determinado elemento de la lista
var elementoDelArray = listaDeCompras[1];
console.log(elementoDelArray);

// Para saber cuantos elementos tiene nuestro archivo

console.log(listaDeCompras.length);
*/

//------------------------------------------------------
// METODOS DE ARRAYS
/*var colores = ["amarillo","azul"];
colores.push("rojo");  // Con push agregamos otro color al final del arreglo
colores.unshift("verde"); // Con unshift agregamos otro color al principio del arreglo
colores.pop(); // Eliminamos el ultimo elemento del Array
colores.shift(); // Eliminamos el primer elemento del Array
console.log(colores);
*/

/*var pintores = ["Picasso", "Velazquez", "Van Gogh", "Dali"];
// Ahora queremos saber si incluye a Dali
var incluyeDali = pintores.includes("Dali");
console.log(incluyeDali); // Si lo tiene debe marcar true
var incluyeMonet = pintores.includes("Monet");
console.log(incluyeMonet); // Si no tiene a Monet debe marcar false
*/

// Vemos si todos son mayores a 5 usando el metodo every
/*var numeros = [1,6,8,9];
var cumplenCondicion = numeros.every((num) => {
    return num > 5;
});
console.log(cumplenCondicion); // Da false
*/
// NUEVAMENTE Vemos si todos son mayores a 5 usando el metodo every
/*var numeros = [10,6,8,9];
var cumplenCondicion = numeros.every((num) => {
    return num > 5;
});
console.log(cumplenCondicion); // Da true
*/
/*
// Metodos SPLIT Y JOIN
var palabra = "Henri"  // Tenemos Henri con i
// Ahora lo corregimos
var palabraSeparada = palabra.split(""); // Con esto indicamos que separe la palabra por cada caracter
console.log(palabraSeparada); // Verificamos que se separen
palabraSeparada.pop();
palabraSeparada.push("y");
console.log(palabraSeparada);
// Ahora usamos el metodo JOIN para convertirla nuevamente en string
var palabraArreglada = palabraSeparada.join(""); // Nuevamente dos comillas juntas
console.log(palabraArreglada);


// Ahora veremos metodos que nos dejaran recorrer algunos arreglos, nos dejaran ir elemento por elemento
// Imprimir numeros de manera individual usando FOR EACH
var numeros = [1, 2, 3, 4]; // Usamos este array hasta masUno
numeros.forEach((num) => console.log(num));  // Por cada numero console.log(num)
// console.log solo de numeros que sean = 3
numeros.forEach((num) => {
    if (num === 3) {
        console.log(num);
    }
});


// Si queremos hacer algun cambio sobre el arreglo
// Si queremos por ejemplo sumarle 1 a todos los numeros del arreglo
var masUno = numeros.map(num => {
    return num + 1;
});
console.log(masUno);
*/

// Bucles y Arrays
var arr = [1, 2, 3, 4, 5];
for(var i = 0 ; i < arr.length ; i++) { // Podemos usar el length o decirle cuantos elementos recorrer
    console.log(arr[i]);
};

// OTRO EJEMPLO
function encontrarLetraP(string){
    // Primero para recorrer cada una de las letras y 
    // ver si tiene P tenemos que transformarla en un arreglo
    var letras = string.split("");

    // Ahora lo recorremos
    for(var i = 0 ; i < letras.length ; i++ ) {
        if(letras[i] === "p") {
            console.log("Si contiene a P");
        }
    }
} 

encontrarLetraP("lapicera");

// Si queremos agregar 5 veces la palabra boom en un arreglo
// El arreglo debe tener una longitud de 5
var arr = [];

while(arr.length < 5){
    arr.push("BOOM"); // Agregamos BOOM al arreglo
}

console.log(arr); // [ 'BOOM', 'BOOM', 'BOOM', 'BOOM', 'BOOM' ]

// Bucle infinito Se ejecuta y nunca deja de ejecutarse

var arr = [];
var n = 1;

while (n < 3) {
    arr.push(Math.random());
}
