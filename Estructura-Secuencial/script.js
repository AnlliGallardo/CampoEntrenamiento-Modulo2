let estudiantes = 40;
let mujeres = 23;
let hombres = 17;
let porchom = 0;
let porcmuj = 0;

let cantidadTotal = mujeres + hombres;

porcmuj = mujeres / cantidadTotal * 100;
porchom = hombres / cantidadTotal * 100;
console.log("El porcentaje de hombres es: " + Math.round(porchom));
console.log("El porcentaje de mujeres es: " + Math.round(porcmuj));


