let deadpool = {
  nombre: 'Wade',
  apellido: 'Winston',
  poder: 'Regeneracion',
  getNombre: function () {
    return `${this.nombre} ${this.apellido} ${this.poder}`
  }
};

//let nombre = deadpool.nombre;
//let apellido = deadpool.apellido;
//let poder = deadpool.poder;

//let {nombre, apellido, poder} = deadpool;
//let {nombre, apellido, poder} = deadpool;
let {nombre: primerNombre, apellido, poder} = deadpool;
console.log(deadpool.getNombre())
//console.log(`Descructuracion: ${nombre} ${apellido} ${poder}`);
console.log(`Descructuracion2: ${primerNombre} ${apellido} ${poder}`);