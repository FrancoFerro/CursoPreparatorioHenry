
var deportes = {
    conBalon: ["Futbol", "Basquet", "Rugby"],
    sinBalon: ["Boxeo", "Surf", "Trekking"],
};

// esProgramador es un objeto dentro de otro objeto
var persona = { nombre: "Lucas", edad: 26, estudios: { esProgramador: true } };

//console.log(persona.edad);

// Como asignarle valores nuevos
persona.nombre = "Martin";
//console.log(persona.nombre);
persona.edad = 32;
//console.log(persona.edad);

var autos = {};
// Creamos una propiedad
autos.marcas = ["Ford", "Audi", "Ferrari"];
//console.log(autos.marcas);
console.log(autos.marcas);

// Eliminamos propiedades
delete autos.marcas;
console.log(autos);


// Funciones de propiedad
var misFunciones = {
    saludar: function () {
        console.log("Hola");
    },
};
// Asi podemos leer esto en la terminal
misFunciones.saludar();



// Hasta ahora trabajamos con Dot-Notation ya que usamos un punto para poder acceder a las propiedades
// Ejemplo
var atuendos = { manos: ["Guantes", "Anillos"], pies: ["Zapatos", "Soquetes"] };
//console.log(atuendos.manos); // Dot-Notation
// Bracket-Notation, ejemplo creando nueva propiedad, es importante que lo hagamos entre comillas como un string
atuendos["piernas"] = ["Bermudas", "Pantalones"];
//console.log(atuendos); // Podemos ver como se agrego la nueva propiedad y sus valores

// Particularidad del Bracket-Notation
var comidas = {};
var diferenciaDeNotaciones = function (propUno, propDos) {
    // Ahora guardamos usando bracket y sin comillas en las propiedades, 
    // para que se pueda ver lo que pasamos de dato en diferenciaDeNotaciones
    // y asi poder mostrar saludalble o no saludable y no propUno o propDos de forma literal
    comidas[propUno] = ["Frutas", "Vegetales"];
    comidas[propDos] = ["Hamburguesa", "Papas Fritas"];
};

diferenciaDeNotaciones("saludable", "noSaludable");
console.log(comidas);


// hasOwnProperty objeto que nos permitira saber si un objeto tiene una propiedad especifica, la respuesta es booleano
var libro = { autor: "Borges", genero: "Policial", año: 1990 };
// Para saber si libro tiene una propiedad
var tienePropiedad = libro.hasOwnProperty("nombre");
//console.log(tienePropiedad); // False
var tienePropiedad = libro.hasOwnProperty("autor");
//console.log(tienePropiedad); // True

// keys devuelve un arreglo con todas las propiedades de un objeto
var todasLasPropiedades = Object.keys(libro);
console.log(todasLasPropiedades); // Devuelve un arreglo con todas las propiedades [ 'autor', 'genero', 'año' ]

// Los objetos tambien se pueden recorrer como haciamos con los arreglos
// for in es un buble especial para recorrerlo, sirve unicamente para recorrer objetos popiedad por propiedad
var mundo = { continentes: 7, paises: 195, oceanos: 5 };
for (var prop in mundo) {
    console.log("Esta es la propiedad: " + prop);
    console.log("Este es el valor: " + mundo[prop]);
}


// Objeto This, hace referencia al contexto

var mascota = {
    animal: "Perro",
    raza: "Ovejero Alemán",
    amistoso: true,
    dueña: "Maria López",
    // Creamos una nueva funcion y usamos This para poder mostrar raza
    info: function () {
        console.log("Mi perro es un " + this.raza);
    }
};

mascota.info();
