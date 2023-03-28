function mayorYMenor(num) {
    if (num > 5 && num < 10) console.log(true);
    else console.log(false);
}

mayorYMenor(2);
mayorYMenor(6);
mayorYMenor(11);


function mayorYMenorYPar(num) {
    if (num > 5 && num < 10 && num % 2 === 0) console.log(true);
    else console.log(false);
}

mayorYMenorYPar(7);
mayorYMenorYPar(6);


function operadorOr(str) {
    if (str === "Henry" || str.length < 2) console.log(true);
    else console.log(false);
}

operadorOr("Henry");
operadorOr("A");
operadorOr("Hola");


function negacion(permiso) {
    if (permiso) console.log("Tiene permiso");  // Es como decir (permiso === true)
}

negacion(true);
negacion(false);


function negacion(permiso) {
    if (!permiso) console.log("Tiene permiso");  // Es como decir (permiso !== true)
}

negacion(true);
negacion(false); // Se mostrara el mensaje


// Funciones mas complejas usando los operadores

function condicionCompleja(num) {
    if (num > 9 && num % 2 === 0 || num === 3) console.log(true);
    else console.log(false);
}

condicionCompleja(12);
condicionCompleja(3);
condicionCompleja(11);