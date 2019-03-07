// setTimeout( function () {
//   console.log('Hola Mundo')
// } )

// setTimeout(() => {
//   console.log('Hola Mundo')
// }, 3000)


let getUsuarioById = (id, callback) => {
  let usuario = {
    nombre: 'Alvaro',
    id
  };

  if (id === 20) {
    callback(`El usuario con id ${id} no existe en la base de datos`)
  } else {
    callback(null, usuario)
  }
};

getUsuarioById(1, (err, usuario) => {
  if (err) {
    return console.log(err)
  }

  console.log('Usuario de base de datos', usuario)
});

// getUsuarioById(10, (usuario) => {
//   console.log('Usuario de base de datos', usuario)
// });