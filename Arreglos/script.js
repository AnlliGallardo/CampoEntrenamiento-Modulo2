const nombres = [
    { nombre: "Ana" },
    { nombre: "Lucia" },
    { nombre: "Maria" },
    { nombre: "Miguel" },
    { nombre: "Jose" },
    { nombre: "Daniel" },
];

function mostrarNombres({nombres}) {
    return `${nombres}`;
}

const nombre = nombres.map(mostrarNombres);

console.log(nombres);