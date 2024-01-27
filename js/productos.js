class Producto {
  constructor(categoria, nombre, precio) {
    this.categoria = categoria.toUpperCase();
    this.nombre = nombre.toUpperCase();
    this.ingredienteSin = listaExterna;
    this.precio = precio;
  }
}

let listaIngredientes = ["Lechuga", "Tomate", "Queso", "Cebolla", "Salsa", "Bacon"];
let botonesCheckbox = document.querySelectorAll('input[type="checkbox"]');
let listaExterna = [];
let pedidos = [];

document.querySelector("#agregarBoton").addEventListener("click", agregar);

function agregar() {
  listaExterna = [];
  botonesCheckbox.forEach((boton) => {
    let botonId = boton.id;
    let nombreDeIngrediente = botonId.toString().slice(8, 16);
    if (boton.checked) {
      listaExterna.push(nombreDeIngrediente);
    }
    document.querySelector("#prueba").innerHTML = listaExterna;
  });
  let hamburguesa = new Producto("combo", "Barba Roja", 4500);
  pedidos.push(hamburguesa);
  console.log(pedidos);
}
