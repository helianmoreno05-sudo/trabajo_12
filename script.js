// Trae la zona de texto de la pagina
const texto = document.getElementById("mensaje");

// Trae el contador de la pagina
const contador = document.getElementById("contador");

// Maximo de caracteres que se pueden escribir
const maximo = 250;

// No deja escribir ni pegar mas del maximo
texto.maxLength = maximo;

// Se ejecuta cada vez que el usuario escribe o borra
texto.addEventListener("input", function () {
  // Cuenta cuantos caracteres hay
  const cantidad = texto.value.length;

  // Muestra el numero en el contador 
  contador.textContent = cantidad + " / " + maximo;

  // Si llego al maximo, pone el borde y el contador en rojo
  if (cantidad >= maximo) {
    texto.classList.add("limite");
    contador.classList.add("limite");
  } else {
    // Si no, les quita el rojo
    texto.classList.remove("limite");
    contador.classList.remove("limite");
  }
});
