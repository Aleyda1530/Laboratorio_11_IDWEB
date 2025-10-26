//EJERCICIO 3
// Ejercicio 3: Contador de números pares e impares

let pares = 0;
let impares = 0;

for (let i = 1; i <= 10; i++) {
    let numero = parseInt(prompt(`Ingrese el numero ${i}:`));

    if (isNaN(numero)) {
        alert(`Valor invalido. Se considera 0.`);
        numero = 0;
    }

    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

alert(`Cantidad de números pares: ${pares}\nCantidad de números impares: ${impares}`);
console.log(`Pares: ${pares}, Impares: ${impares}`);