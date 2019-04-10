//requireds
//const fs = require('fs');
//esos son nativos de nodejs
//const fs = require('express'); este es un paquete de node que no son nativos, expansiones hechos por otros
//const fs = require('./fs'); estos son generados por nosotros,
const {crearArchivo} = require('./multiplicar/multiplicar')


//console.log(multiplicar)

//multiplicar.crearArchivo()
//console.log(process);

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];
console.log(base)

crearArchivo(base)
  .then(archivo => console.log(`Archivo creado: ${archivo} `))
  .catch(err => console.log(err));