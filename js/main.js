let horariosAbierto = false;
let horariosContenedor = document.querySelector("#horariosContenedor");

document.querySelector("#horarios").addEventListener("click", abrirHorario);
document.querySelector("html").addEventListener("click", cerrarHorario);

function abrirHorario(event) {
  // Detiene la propagación del evento para que no se cierre inmediatamente
  event.stopPropagation();

  if (!horariosAbierto) {
    horariosContenedor.style.display = "flex";
    horariosAbierto = true;
  } else {
    horariosContenedor.style.display = "none";
    horariosAbierto = false;
  }
}

function cerrarHorario() {
  if (horariosAbierto) {
    horariosContenedor.style.display = "none";
    horariosAbierto = false;
  }
}

/* --------------------------------------------------------------------------- */

function mostrarContenedor(contenedorId, elementoLista) {
  ocultarContenedores();

  /* Quitar la clase 'seleccionado' de todos los elementos de la lista */
  let elementosLista = document.querySelectorAll("#listaProductos li");
  elementosLista.forEach(function (elemento) {
    elemento.classList.remove("seleccionado");
  });

  /*  Mostrar el contenedor */
  let contenedor = document.getElementById(contenedorId);
  if (contenedor) {
    contenedor.style.display = "flex";
  }

  /*   Agregar la clase 'seleccionado' al elemento */
  elementoLista.classList.add("seleccionado");
}

/* Función para ocultar todos los contenedores */
function ocultarContenedores() {
  let contenedores = document.getElementsByClassName("contenedor");
  for (let i = 0; i < contenedores.length; i++) {
    contenedores[i].style.display = "none";
  }
}

/* Mostrar el contenedor de Combos al inicio */
mostrarContenedor("contenedorCombos", document.getElementById("combos"));

/* --------------------------------------------------------------------------- */

/* BOTONES DE AGREGADO */
let agregarCheeseBurger = document.querySelector("#agregarCheeseBurger");
let agregarBarbaRoja = document.querySelector("#agregarBarbaRoja");
let agregarClasica = document.querySelector("#agregarClasica");

/* CONTENEDOR TOTAL */
let contenedorSinIngredientes = document.getElementById("eleccion-ingredientes");

/* CONTENEDORES */
let cheeseContainer = document.getElementById("cheese");
let barbaRojaContainer = document.getElementById("barbaRoja");
let comunContainer = document.getElementById("comun");

/* cruz para cerrar */
let cruzCerrar = document.getElementsByClassName("contenedorCruz");

/* funciones y eventos */
agregarCheeseBurger.addEventListener("click", function () {
  mostrarContenedorDeIngredientes(cheeseContainer);
});

agregarBarbaRoja.addEventListener("click", function () {
  mostrarContenedorDeIngredientes(barbaRojaContainer);
});

agregarClasica.addEventListener("click", function () {
  mostrarContenedorDeIngredientes(comunContainer);
});

function mostrarContenedorDeIngredientes(contenedor) {
  // Ocultar todos los contenedores antes de mostrar el deseado
  cheeseContainer.style.display = "none";
  barbaRojaContainer.style.display = "none";
  comunContainer.style.display = "none";

  // Mostrar el contenedor
  contenedor.style.display = "flex";
  contenedorSinIngredientes.style.display = "flex";
}


let botonCruz;

for (botonCruz of cruzCerrar) {
  botonCruz.addEventListener("click", cerrarContenedorIngredientes);
}
function cerrarContenedorIngredientes() {
  contenedorSinIngredientes.style.display = "none";
}
