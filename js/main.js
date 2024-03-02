class Producto {
  constructor(categoria, nombre, precio, img, descripcion, ingredientesSin = [], idB) {
    this.categoria = categoria;
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
    this.descripcion = descripcion;
    this.ingredientesSin = ingredientesSin;
    this.idB = idB;
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
  let cheddarLover = new Producto("Combo", "Cheddar", 3200, "img/clasica.jpg", "Pan de papa, medallón artesanal de 150 g de carne, queso cheddar y papas fritas.");

  /* array de productos para crear div */
  let listaProductosCombo = [cheeseBurgerCombo, barbaRojaCombo, clasicaCombo, cheddarLover];
  let productoCombo;
  let productoElemento;

  /* bucle para recorrer el array y crear una por una las cajas */
  for (productoCombo of listaProductosCombo) {
    productoElemento = document.createElement("div");
    productoElemento.className = "carta-producto widget";
    productoElemento.innerHTML = `<div class="contenedor-imagen-producto">
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
    ScrollReveal().reveal(".widget", { interval: 300 });
  }

  /* --------------------------------------------------------------------------- */

  /* lista de ingredientes sin, para quitar ingredientes, si no te gusta el tomate ya sabes */

  let botonesCheckbox = document.querySelectorAll('input[type="checkbox"]');
  let pedidos = [];

  let cheese = false;
  let barbaRoja = false;
  let clasica = false;
  let cheddar = false;
  let nombreBurger;
  let precioBurger;
  let categoria;
  let imagenBurger;
  let descripcion;
  let idBurger = 0;

  document.querySelector("#agregarBoton").addEventListener("click", agregar);

  /* agregar los pedidos al carrito */
  function agregar() {
    listaExterna = [];
    botonesCheckbox.forEach((boton) => {
      let botonClass = boton.className;
      let nombreDeIngrediente = botonClass.toString().slice(8, botonClass.length);
      if (boton.checked) {
        listaExterna.push(nombreDeIngrediente);
      }
      boton.checked = false;
      contenedorSinIngredientes.style.display="none";
    });

    /* condicional para definir que objeto es el seleccionado (se aceptan opiniones de como optimizarlo) */

    if (cheese || barbaRoja || clasica || cheddar) {
      /* alert con sweet alert */
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Se ha agregado al carrito",
        showConfirmButton: false,
        timer: 1000,
      });
    }

    switch (true) {
      case cheese:
        nombreBurger = cheeseBurgerCombo.nombre;
        precioBurger = cheeseBurgerCombo.precio;
        categoria = cheeseBurgerCombo.categoria;
        imagenBurger = cheeseBurgerCombo.img;
        descripcion = cheeseBurgerCombo.descripcion;
        idBurger++;
        break;
      case barbaRoja:
        nombreBurger = barbaRojaCombo.nombre;
        precioBurger = barbaRojaCombo.precio;
        categoria = barbaRojaCombo.categoria;
        imagenBurger = barbaRojaCombo.img;
        descripcion = barbaRojaCombo.descripcion;
        idBurger++;
        break;
      case clasica:
        nombreBurger = clasicaCombo.nombre;
        precioBurger = clasicaCombo.precio;
        categoria = clasicaCombo.categoria;
        imagenBurger = clasicaCombo.img;
        descripcion = clasicaCombo.descripcion;
        idBurger++;
        break;
      default:
        nombreBurger = cheddarLover.nombre;
        precioBurger = cheddarLover.precio;
        categoria = cheddarLover.categoria;
        imagenBurger = cheddarLover.img;
        descripcion = cheddarLover.descripcion;
        idBurger++;
    }
    let hamburguesaPedida = new Producto(categoria, nombreBurger, precioBurger, imagenBurger, descripcion, listaExterna, idBurger);
    pedidos.push(hamburguesaPedida);

    localStorage.setItem("pedidos", JSON.stringify(pedidos));
    let pedidosLS = JSON.parse(localStorage.getItem("pedidos"));

    // Función para crear los elementos del carrito en HTML
    function crearCarrito(x) {
      let contenido = "";
      let contenedorPedidosCarrito = document.getElementById("contenedorPedidosCarrito");

      // Limpiar el contenido del contenedor del carrito
      contenedorPedidosCarrito.innerHTML = "";

      // Agregar los nuevos elementos al carrito
      for (const pedido of x) {
        contenido += `
          <div class="contenedor_total-pedidos">
            <div class="imagenPedido">
              <img src="${pedido.img}" alt="${pedido.nombre}">
            </div>
            <div class="contenedor_descirpcion">
              <div class="${pedido.nombre}">
                <h2>${pedido.nombre}</h2>
              </div>
              <div class="precio">
                <p>${pedido.precio}</p>
              </div>
              <div class="trash ${pedido.idB}">
                <i class="fa-solid fa-trash"></i>
              </div>
            </div>
          </div>`;
      }

      // Agregar el contenido al contenedor del carrito
      contenedorPedidosCarrito.innerHTML += contenido;

      // Asociar eventos de clic a los nuevos elementos trash después de agregarlos al DOM
      let trashElements = document.querySelectorAll(".trash");
      trashElements.forEach((trashElement) => {
        agregarTrashListener(trashElement);
      });
    }

    // Función para eliminar un producto del carrito
    function tirarBasura(x) {
      // Obtener el ID único del producto desde la clase del elemento trash
      let idProductoEliminar = parseInt(x.classList[1]);

      // Filtrar los productos para obtener aquellos que no coinciden con el ID del producto a eliminar
      pedidos = pedidos.filter((pedido) => pedido.idB !== idProductoEliminar);

      // Actualizar el almacenamiento local con la lista de pedidos actualizada
      localStorage.setItem("pedidos", JSON.stringify(pedidos));

      // Volver a cargar el carrito con la lista de pedidos actualizada
      crearCarrito(pedidos);
      console.log(pedidos);
    }

    // Función para asociar el evento de clic a los elementos trash
    function agregarTrashListener(trashElement) {
      trashElement.addEventListener("click", function () {
        tirarBasura(this);
      });
    }

    // Llamar a la función para crear el carrito cuando se carga la página
    crearCarrito(pedidosLS);
    console.log(pedidos);

    const obtenerProductos = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(pedidos);
        }),
          3000;
      });
    };

    function renderProductos(x) {
      let contenido = "";

      for (const pedido of x) {
        contenido += `
        <div class="contenedor_total-pedidos_enviar">
        <div class="imagenPedido_enviar">
        <img src="${pedido.img}" alt="${pedido.nombre}">
        </div>
        <div class="${pedido.nombre}_enviar">
        <h2>${pedido.nombre}</h2>
        </div>
        </div>`;
      }
      document.querySelector("#productosPedidos").innerHTML = contenido;
    }

    obtenerProductos().then((data) => {
      renderProductos(data);
    });
  }

  document.querySelector("#finalizarCompraLlamar").addEventListener("click", abrirPedidos);
  let contenedorPedidosFinal = document.querySelector("#boxProductosPedidos");

  function abrirPedidos() {
    contenedorPedidosFinal.style.display = "flex";
  }

  document.querySelector("#contenedorCruzPedidos").addEventListener("click", cerrarContenedorPedidos);

  function cerrarContenedorPedidos() {
    contenedorPedidosFinal.style.display = "none";
  }

  /* mostrar carrito */
  let contenedorMostrado = false;
  let carritoBtn = document.getElementById("carrito");

  carritoBtn.addEventListener("click", function () {
    let contenedorCarrito = document.getElementById("carritoContenedor");
    if (contenedorMostrado) {
      contenedorCarrito.style.display = "none";
    } else {
      contenedorCarrito.style.display = "flex";
    }
    contenedorMostrado = !contenedorMostrado;
  });

  /* BOTONES DE AGREGADO */
  let agregarCheeseBurger = document.querySelector("#agregarCheeseBurger");
  let agregarBarbaRoja = document.querySelector("#agregarBarbaRoja");
  let agregarClasica = document.querySelector("#agregarClasica");
  let agregarCheddar = document.querySelector("#agregarCheddar");

  /* CONTENEDOR TOTAL */
  let contenedorSinIngredientes = document.getElementById("eleccion-ingredientes");

  /* CONTENEDORES */
  let cheeseContainer = document.getElementById("cheese");
  let barbaRojaContainer = document.getElementById("barbaRoja");
  let comunContainer = document.getElementById("comun");
  let cheddarContainer = document.getElementById("cheddar");

  /* cruz para cerrar */
  let cruzCerrar = document.getElementsByClassName("contenedorCruz");

  /* funciones y eventos */
  agregarCheeseBurger.addEventListener("click", function () {
    mostrarContenedorDeIngredientes(cheeseContainer);
    cheese = true;
    barbaRoja = false;
    clasica = false;
    cheddar = false;
  });

  agregarBarbaRoja.addEventListener("click", function () {
    mostrarContenedorDeIngredientes(barbaRojaContainer);
    cheese = false;
    barbaRoja = true;
    clasica = false;
    cheddar = false;
  });

  agregarClasica.addEventListener("click", function () {
    mostrarContenedorDeIngredientes(comunContainer);
    cheese = false;
    barbaRoja = false;
    clasica = true;
    cheddar = false;
  });

  agregarCheddar.addEventListener("click", function () {
    mostrarContenedorDeIngredientes(cheddarContainer);
    cheese = false;
    barbaRoja = false;
    clasica = false;
    cheddar = true;
  });

  function mostrarContenedorDeIngredientes(contenedor) {
    // Ocultar todos los contenedores antes de mostrar el deseado
    cheeseContainer.style.display = "none";
    barbaRojaContainer.style.display = "none";
    comunContainer.style.display = "none";
    cheddarContainer.style.display = "none";

    // Mostrar el contenedor
    contenedor.style.display = "flex";
    contenedorSinIngredientes.style.display = "flex";
  }

  let botonCruz;

  /* cerrar contenedor de ingredientes */

  for (botonCruz of cruzCerrar) {
    botonCruz.addEventListener("click", cerrarContenedorIngredientes);
  }
  function cerrarContenedorIngredientes() {
    contenedorSinIngredientes.style.display = "none";
  }

  /* horarios */
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
ScrollReveal().reveal(".headline");
ScrollReveal().reveal(".body", { duration: 1000 });
