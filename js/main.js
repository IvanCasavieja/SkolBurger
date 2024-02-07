document.addEventListener("DOMContentLoaded", function () {
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
});

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
