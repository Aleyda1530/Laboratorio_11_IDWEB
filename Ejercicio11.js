// EJERCICIO 11
/**
 Un supermercado desea una app que simule un carrito de compras muy simple
El usuario puede agregar productos uno por uno, indicando sólo su precio, hasta que decida no continuar
Al terminar, mostrar:
El total parcial a pagar
Si el total supera 100, mostrar el mensaje "Tiene un descuento del 10%" y aplicar el descuento
Si el total está entre 50 y 100, mostrar "Gana un cupón de 5%" y aplicar el descuento
Si el total es menor que 50, mostrar "No aplica descuento"
Finalmente, mostrar el total final a pagar
 */
let total = 0;
let continuar;

do {
  let precio = parseFloat(prompt("Ingrese el precio del producto:"));
  
  if (isNaN(precio) || precio <= 0) {
    alert("Precio inválido.");
  } else {
    total += precio;
  }

  continuar = prompt("¿Desea agregar otro producto? (s/n)").toLowerCase();
} while (continuar === "s");

let descuento = 0;

if (total > 1000) {
  descuento = 0.15; // 15%
} else if (total > 500) {
  descuento = 0.10; // 10%
} else if (total > 200) {
  descuento = 0.05; // 5%
}

let totalDescuento = total - total * descuento;

alert(
  "Total sin descuento: S/ " + total.toFixed(2) + "\n" +
  "Descuento aplicado: " + (descuento * 100) + "%\n" +
  "Total final a pagar: S/ " + totalDescuento.toFixed(2)
);

console.log("Total:", total, "Descuento:", descuento, "Total final:", totalDescuento);
