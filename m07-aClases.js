/*
// Creamos la clase Auto con sus argumentos y propiedades
// Usamos la sintaxis Funcion Constructora
function Auto(puertas, color, marca, año, ruedas) {
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;
    // Agregando Metodos a la clase anterior
    this.informacion = function () {
        console.log("Este es un " + this.marca + " de color " + this.color);
    };
}

// Inicializamos y con new creamos una instancia de nuestra clase
var miPrimerAuto = new Auto(2, "Rojo", "Ferrari", 2018, 4);
// Accedemos a la funcion creada
miPrimerAuto.informacion(); // Este es un Ferrari de color Rojo
console.log(miPrimerAuto); // De esta forma mostramos el nombre de la clase y sus propiedades con sus valores
console.log(miPrimerAuto.marca); // De esta forma solo mostramos el valor de la propiedad
*/
/*
// Ahora creamos la misma clase usando Expresion de Clase
class Auto {
    constructor(puertas, color, marca, año, ruedas) {
        this.puertas = puertas;
        this.color = color;
        this.marca = marca;
        this.año = año;
        this.ruedas = ruedas;
        // Agregamos un metodo
        
    }
    // Metodo
    informacion() {
        console.log("Este es un " + this.marca + " de color " + this.color);
    } 
}
// Creamos una instancia de la clase
var miSegundoAuto = new Auto(2, "Rojo", "Ferrari", 2018, 4);
// Creamos un metodo
miSegundoAuto.informacion();
//console.log(miSegundoAuto); // De esta forma mostramos el nombre de la clase y sus propiedades con sus valores
//console.log(miSegundoAuto.marca); // De esta forma solo mostramos el valor de la propiedad 
*/
/*
// Clase solo con una propiedad y un metodo
class Futbol{
    constructor(jugador){
        this.jugador = jugador;
    }
    // Metodo
    obtenerNombre(){
        console.log(this.jugador);
    }
}


// Ahora creamos una instancia llamada Argentina, de esta clase
var argentina = new Futbol("Messi");
// Metodo de la instancia
argentina.obtenerNombre(); // Messi
*/