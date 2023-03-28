/*var suma = 0;
//console.log(suma);

for (var i = 0 ; i < 10 ; i++) {
    suma = suma + 1;
    console.log(suma);
 }

 // Otra forma de hacerlo

 for (var i = 0 ; i < 5 ; i++) {              // Ahora hacemos hasta 5 para que sume 10, si no, nos pasamos
    suma = suma + i;
    console.log("Variable de iteracion: ", i);
    console.log("Ahora Suma vale: ", suma);
 }

 console.log("Variable Suma: ", suma);
 

 // Bucle While

 var suma = 0;

 while(suma < 3) {
    suma = suma + 1;
    console.log(suma);
 }
*/

// Ejemplo usando continue en while

i = 0;
n = 0;
while (i < 5) {
   i++;
   if (i == 3)
   continue;
   n += i;
}

console.log(n);