// function sumar(a, b) {
//   return a + b
// }

// let sumar = (a, b) => {
//   return a + b
// };

// let sumar = (a, b) => a + b


// Tarea
// function saludar() {
//   return 'Hola Mundo'
// }

// let saludar = () => 'Hola Mundo';
// console.log(saludar())

// function saludar(nombre) {
//   return `Hola ${nombre}`
// }
// console.log(saludar('Alvaro'));

// let saludar = nombre => {
//   return `Hola ${nombre}`
// };
// console.log(saludar('Alvaro'))

// let saludar = nombre => `Hola ${nombre}`;
// console.log(saludar('Alvaro'));


let deadpool = {
  nombre: 'Wade',
  apellido: 'Winston',
  poder: 'Regeneracion',
  getNombre(){
    return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
  }
};
console.log(deadpool.getNombre());
// console.log(sumar(10, 20))