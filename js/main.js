class Producto {
  constructor(categoria, nombre, precio, img, descripcion, ingredientesSin = []) {
    this.categoria = categoria;
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
    this.descripcion = descripcion;
    this.ingredientesSin = ingredientesSin;
  }
}
/* aplicar cambios despues de cargado el documento */
document.addEventListener("DOMContentLoaded", function () {
  let contenedorCombos = document.querySelector("#contenedorCombos");
  let listaExterna = [];

  /* declaracion de productos */
  let cheeseBurgerCombo = new Producto("Combo", "CheeseBurger", 4100, "img/cheeseburger.webp", "Pan de papa, medallón artesanal de 150g de carne, queso cheedar, tomate, lechuga, huevo frito, salsa big mac y papas fritas.");
  let barbaRojaCombo = new Producto("Combo", "BarbaRoja", 4600, "img/barbaroja.webp", "Pan de papa, medallón artesanal de 150g de carne, queso cheddar, tiras de bacon, tomate, cebolla caramelizada, salsa barbacoa y papas fritas.");
  let clasicaCombo = new Producto("Combo", "Clasica", 3600, "img/clasica.jpg", "Pan de papa, medallón artesanal de 150 g de carne, lechuga, tomate, huevo, queso cheddar y papas fritas.");

  /* array de productos para crear div */
  let listaProductosCombo = [cheeseBurgerCombo, barbaRojaCombo, clasicaCombo];
  let productoCombo;
  let productoElemento;

  /* bucle para recorrer el array y crear una por una las cajas */
  for (productoCombo of listaProductosCombo) {
    productoElemento = document.createElement("div");
    productoElemento.className = "carta-producto";
    productoElemento.innerHTML = `<div class="contenedort-imagen-producto">
      <img src="${productoCombo.img}" alt="${productoCombo.nombre}" />
    </div>
    <div class="contenedor-titulo-descripcion">
      <div class="contenedor-titulo-producto">
        <h1>${productoCombo.nombre} ${productoCombo.categoria}</h1>
      </div>
      <div class="descripcion-producto">
        <p>${productoCombo.descripcion}</p>
      </div>
      <div class="contenedor-agregar">
        <p class="agregar" id="agregar${productoCombo.nombre}">Agregar</p>
        <p class="precio">$${productoCombo.precio}</p>
      </div>
    </div>`;
    contenedorCombos.appendChild(productoElemento);
  }

  /* --------------------------------------------------------------------------- */

  /* lista de ingredientes sin, para quitar ingredientes, si no te gusta el tomate ya sabes */

  let botonesCheckbox = document.querySelectorAll('input[type="checkbox"]');
  let pedidos = [];

  let cheese = false;
  let barbaRoja = false;
  let clasica = false;
  let nombreBurger;
  let precioBurger;
  let categoria;

  document.querySelector("#agregarBoton").addEventListener("click", agregar);

  function agregar() {
    listaExterna = [];
    botonesCheckbox.forEach((boton) => {
      let botonClass = boton.className;
      let nombreDeIngrediente = botonClass.toString().slice(8, botonClass.length);
      if (boton.checked) {
        listaExterna.push(nombreDeIngrediente);
      }
      boton.checked = false;
    });

    if (cheese) {
      nombreBurger = "Cheese Burger";
      precioBurger = 4100;
      categoria = "Combo";
    } else if (barbaRoja) {
      nombreBurger = "Barba Roja";
      precioBurger = 4600;
      categoria = "Combo";
    } else {
      nombreBurger = "Clasica";
      precioBurger = 3600;
      categoria = "Combo";
    }
    let hamburguesaPedida = new Producto(categoria, nombreBurger, precioBurger, "a", "a", listaExterna);
    pedidos.push(hamburguesaPedida);
    console.log(nombreBurger);
    console.log(pedidos);
  }

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
    cheese = true;
    barbaRoja = false;
    clasica = false;
  });

  agregarBarbaRoja.addEventListener("click", function () {
    mostrarContenedorDeIngredientes(barbaRojaContainer);
    cheese = false;
    barbaRoja = true;
    clasica = false;
  });

  agregarClasica.addEventListener("click", function () {
    mostrarContenedorDeIngredientes(comunContainer);
    cheese = false;
    barbaRoja = false;
    clasica = true;
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
});

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
