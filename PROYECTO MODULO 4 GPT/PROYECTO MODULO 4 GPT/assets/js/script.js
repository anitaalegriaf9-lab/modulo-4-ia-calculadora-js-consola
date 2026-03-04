console.log("%c=== APLICACIÓN DE PRÁCTICA JAVASCRIPT ===",
"color:white; background-color: green; padding:5px;");

// ==============================
// 1️⃣ VARIABLES Y VALIDACIONES
// ==============================

let numero1 = Number(prompt("Ingresa el primer número:"));
let numero2 = Number(prompt("Ingresa el segundo número:"));

// Validar que sean números
if (isNaN(numero1) || isNaN(numero2)) {
    alert("Debes ingresar números válidos.");
    throw new Error("Entrada inválida");
}

// ==============================
// 2️⃣ FUNCIONES (MODULARIZACIÓN)
// ==============================

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "No se puede dividir por cero";
    }
    return a / b;
}

// ==============================
// 3️⃣ OBJETO CALCULADORA
// ==============================

const calculadora = {
    suma: sumar,
    resta: restar,
    multiplicacion: multiplicar,
    division: dividir
};

// ==============================
// 4️⃣ MENÚ CON SWITCH
// ==============================

let opcion = prompt("Elige operación: suma, resta, multiplicacion, division");

let resultado;

switch (opcion) {
    case "suma":
        resultado = calculadora.suma(numero1, numero2);
        break;
    case "resta":
        resultado = calculadora.resta(numero1, numero2);
        break;
    case "multiplicacion":
        resultado = calculadora.multiplicacion(numero1, numero2);
        break;
    case "division":
        resultado = calculadora.division(numero1, numero2);
        break;
    default:
        resultado = "Operación no válida";
}

console.log("Resultado:", resultado);

// ==============================
// 5️⃣ ARREGLO DE RESULTADOS
// ==============================

let historial = [];

historial.push({
    num1: numero1,
    num2: numero2,
    operacion: opcion,
    resultado: resultado
});

console.log("Historial:");
console.log(historial);

// ==============================
// 6️⃣ CICLOS
// ==============================

// FOR
for (let i = 0; i < historial.length; i++) {
    console.log("Registro", i + 1, historial[i]);
}

// WHILE
let i = 0;
while (i < historial.length) {
    console.log("Revisión con while:", historial[i].resultado);
    i++;
}

// ==============================
// 7️⃣ FUNCIÓN QUE FILTRA RESULTADOS
// ==============================

function filtrarResultados(lista) {
    return lista.filter(item => typeof item.resultado === "number");
}

console.log("Resultados numéricos:", filtrarResultados(historial));