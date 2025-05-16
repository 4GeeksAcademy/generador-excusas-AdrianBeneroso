import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


// window.onload = function () {

//   const who = ['Mi profesor', 'Mi gallina', 'El vecino', 'Mi abuela'];
//   const action = ['se comio', 'rompio', ' se guardo', 'volo'];
//   const what = ['mi trabajo', 'mi tabaco', 'el sombrero', 'el arbol'];
//   const when = ['despues de clase de violin', 'cuando yo paseaba por el prado', 'mientras hacia ejercicio desnudo', 'durante la comida de la sagrada familia'];
//  const imprimir_excusa = document.getelementById('excuse-onload');


//   let who_random = Math.floor(Math.random() * who.length);
//   let action_random = Math.floor(Math.random() * action.length);
//   let what_random = Math.floor(Math.random() * what.length);
//   let when_random = Math.floor(Math.random() * when.length);
//   const excuse = `${who[who_random]} ${action[action_random]} ${what[what_random]} ${when[when_random]}`;

//   imprimir_excusa.innerHTML = excuse;


// }



const who = ['Mi profesor', 'Mi gallina', 'El vecino', 'Mi abuela'];
const action = ['se comio', 'rompio', ' se guardo', 'volo'];
const what = ['mi trabajo', 'mi tabaco', 'el sombrero', 'el arbol'];
const when = ['despues de clase de violin', 'cuando yo paseaba por el prado', 'mientras hacia ejercicio desnudo', 'durante la comida de la sagrada familia'];
const historial_excusas = [];
const textarea = document.getElementById('historial-excusas');
const imprimir_excusa = document.getElementById('excuse-save');


function actualizarHistorial() {
  textarea.value = historial_excusas.join('\n');
}
function numAleatorioArray(posicion) { // he añadido una funcion
  return Math.floor(Math.random() * who.length);
}


document.getElementById('generar-excusa').addEventListener('click', function () {


//MI CÓDIGO ANTIGUO

  // let who_random = Math.floor(Math.random() * who.length);
  // let action_random = Math.floor(Math.random() * action.length);
  // let what_random = Math.floor(Math.random() * what.length);
  // let when_random = Math.floor(Math.random() * when.length);

  let who_random = numAleatorioArray(who.length); // estoy es lo que he modificado
  let what_random = numAleatorioArray(what.length);// estoy es lo que he modificado
  let action_random = numAleatorioArray(action.length);// estoy es lo que he modificado
  let when_random = numAleatorioArray(when.length);// estoy es lo que he modificado
  const excuse = `${who[who_random]} ${action[action_random]} ${what[what_random]} ${when[when_random]}`;
  historial_excusas.push(excuse);
  imprimir_excusa.innerHTML = excuse;
  actualizarHistorial();

})



document.getElementById('eliminar-excusa').addEventListener('click', function () {

  if (historial_excusas.length > 0) {
    historial_excusas.pop();
    actualizarHistorial();

  }




})