
class Persona {
    // Un metodo, dos propiedades
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    // Un metodo que devuelve un saludo
    saludar() {
       console.log("Hola, mi nombre es " + this.nombre + ". Tengo " + this.edad + " años");
    }
}

/*ar datos = new Persona("Franco", 24);
// Directamente ejecutamos el metodo saludar, el console.log ya esta en saludar
datos.saludar();*/

// Extension de clase, nos permitira tener una clase general que le heredara propiedades y metodos a otras
// Continuando y usando lo anterior, extendemos la clase persona a la clase programador
class Programador extends Persona {
    // Ahora le indicamos las propiedades que queremos que tenga la clase programador
    constructor(nombre, edad, añosDeExperiencia) {
        super(nombre, edad);
        this.añosDeExperiencia = añosDeExperiencia;
    }

    // Ahora le agregamos el metodo codear que hara un console.log
    codear() {
        console.log("Soy " + this.nombre + " y tengo " + this.edad + " años. Codeo desde hace " + this.añosDeExperiencia + " años");
    }
}

var datos = new Programador("Franco", 24, 2);
datos.codear();
// podria tomar tambien el metodo saludar ya que esto es una extension
datos.saludar(); // Hola, mi nombre es Franco. Tengo 24 años