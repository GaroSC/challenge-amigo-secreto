// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/**
 * Se crea un array vacío llamado listaAmigos.
 */
let listaAmigos = [];

/**
 * Función que agrega un amigo a la lista de amigos.
 */
function agregarAmigo() {
  // Se obtiene el valor del input con id 'amigo'.
  let nombreAmigo = document.getElementById("amigo").value;
  // Si el input está vacío, se muestra un mensaje de alerta.
  if (!nombreAmigo) {
    alert("Por favor, inserte el nombre de un amigo.");
    return;
  }
  // Se agrega el nombre del amigo al array listaAmigos.
  listaAmigos.push(nombreAmigo);
  console.log(listaAmigos);
  // Se limpia el input.
  document.getElementById("amigo").value = "";
  // Se actualiza la lista de amigos en el HTML.
  actualizarListaAmigos();
  return;
}

/**
 * Función que actualiza la lista de amigos en el HTML.
 */
function actualizarListaAmigos() {
  // Se obtiene el elemento con id 'listaAmigos'.
  let listaAmigosHTML = document.getElementById("listaAmigos");
  // Se limpia la lista de amigos.
  listaAmigosHTML.innerHTML = "";
  // Por cada amigo en listaAmigos, se crea un elemento li y se agrega a la lista de amigos en el HTML.
  listaAmigos.forEach((amigo) => {
    // Se crea un elemento li.
    let li = document.createElement("li");
    // Se agrega el nombre del amigo al elemento li.
    li.textContent = amigo;
    // Se agrega el elemento li a la lista de amigos en el HTML.
    listaAmigosHTML.appendChild(li);
  });
  return;
}

/**
 * Función que sortea un amigo de la lista de amigos.
 */
function sortearAmigo() {
  // Si la lista de amigos está vacía, se muestra un mensaje de alerta.
  if (listaAmigos.length === 0) {
    alert("Por favor, agregue al menos un amigo.");
    return;
  }
  // Se sortea un amigo de la lista de amigos.
  let amigoSorteado =
    listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
  // Se obtiene el elemento con id 'resultado'.
  let resultado = document.getElementById("resultado");
  // Se muestra el amigo sorteado en el HTML.
  resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
  return;
}
