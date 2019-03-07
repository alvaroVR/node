let nombre = 'Deadpool'
let real = 'Wade Winston'

let nombreCompleto = 'Tradicional: ' + nombre + ' ' + real;
let nombreCompletoTemplate = `Nuevo: ${nombre} ${real}`;

console.log(nombreCompleto);
console.log(nombreCompletoTemplate);


function getNombre() {
  return `${nombre} ${real}`
}

console.log(`El nombre de: ${getNombre()}`);
