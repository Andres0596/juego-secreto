// let numeroSecreto = generarNumeroSecreto();
// let intentos = 1;
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

// let titulo = document.querySelector("h1");
// titulo.innerHTML = "Juego del número secreto";

// let parrafo = document.querySelector("p");
// parrafo.innerHTML = "Indica un número del 1 al 10";

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  //El usuario acertó
  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el número en ${intentos} ${
        intentos === 1 ? "intento" : "intentos"
      }`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    //El usuario no acertó
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El número secreto es menor");
    } else {
      asignarTextoElemento("p", "El número es mayor");
    }
    if (intentos == 3) {
      asignarTextoElemento("p", `Perdiste ya utilizaste tus 3 intentos ☹`);
      limpiarCaja();
    } else {
      intentos++;
      limpiarCaja();
    }
  }
  return;
}

function limpiarCaja() {
  // let valorCaja = document.querySelector("#valorUsuario");
  // valorCaja.value = "";
  document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  //Si ya sorteamos todos los números
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento("p", "Ya se sortearon todos los números posibles");
  } else {
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      //Si el número generado esta incluido en la lista
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto");
  asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarjuego() {
  //Limpiar la caja
  limpiarCaja();
  //Indicar mensaje de intervalo de números
  //Generar el número aleatorio
  //Inicializar el numero de intentos
  condicionesIniciales();
  //Deshabilitar el botón de nuevo juego
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

condicionesIniciales();
