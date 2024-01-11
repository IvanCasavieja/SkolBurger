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
} else if (conf === "no") {
  alert("Ah, que macana pense que ya habia conseguido laburo");
} else {
  alert('Proba con "si" o "no", el resto de respuestas es mucho para mi');
}

/* Function buicle infinito */
function bucleInfinito(datoUno) {
  while (datoUno === "" || datoUno === null) {
    datoUno = prompt("Ingrese un dato valido");
  }
  return datoUno;
}
