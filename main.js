/* nombre */
let nombre = prompt("Escriba su nombre");
if (nombre === "" || nombre === null) {
  nombre = bucleInfinito(nombre);
}

/* confirmacion */
alert("Bienvenido a mi futuro Portfolio " + nombre);
let confirmacion = prompt("¿Estas listo para leer mi informacion?");
if (confirmacion === "" || confirmacion === null) {
  confirmacion = bucleInfinito(confirmacion);
}

/* traspaso a minusculas */
let conf = confirmacion.toLowerCase();

/* condicional de acceso */
if (conf === "si") {
  alert("Aguarde en linea mientras lo comunicamos con el area.");
  for (let i = 3; i > 0; i--) {
    alert("En " + i);
  }
  alert("Esta parte no tiene nada que ver, pero como decia que habia que poner operaciones como en clase tuve que inventar algo");
  let palabraUno = prompt("Ingrese una palabra");
  if (palabraUno === "" || palabraUno === null) {
    palabraUno = bucleInfinito(palabraUno);
  }
  let palabraDos = prompt("Ingrese optra palabra");
  if (palabraDos === "" || palabraDos === null) {
    palabraDos = bucleInfinito(palabraDos);
  }
  let resultado = sumaX(palabraUno, palabraDos)
  alert("La junta de estas dos palabras es " + resultado);
} else if (conf === "no") {
  alert("Ah, que macana pense que ya habia conseguido laburo");
} else {
  alert('Proba con "si" o "no", el resto de respuestas es mucho para mi');
}

/* Function bucle infinito */
function bucleInfinito(datoUno) {
  while (datoUno === "" || datoUno === null) {
    datoUno = prompt("Ingrese un dato valido");
  }
  return datoUno;
}

function sumaX(datoUno, datoDos) {
  return datoUno + " " + datoDos;
}
