let empleados = [{
  id: 1,
  nombre: 'Alvaro'
},
  {
    id: 2,
    nombre: 'Almendra'
  },
  {
    id: 3,
    nombre: 'Juan'
  }
];

let salarios = [{
  id: 1,
  salario: 1000
},
  {
    id: 2,
    salario: 2000
  }
];

let getSalario = (empleado, callback) => {
  let salarioDb = salarios.find(salario => salario.id === empleado.id)

  if (!salarioDb) {
    callback(`No se encontro un salario para el usuario ${empleado}`)
  } else {
    callback(null, {
      nombre: empleado.nombre,
      salario: empleado.salario,
      id: empleado.id
    })
  }
}

let getEmpleado = (id) => {

  return new Promise((resolve, reject) => {
    let empleadoDb = empleados.find(empleado => empleado.id === id);

    if (!empleadoDb) {
      reject(`No existe en usuario con el id: ${id}`)
    } else {
      resolve(empleadoDb)
    }
  })
};

let getSalario1 = (id) => {
  return new Promise((resolve, reject) => {
    let salarioDb = salarios.find(salario =>
      salario.id === id);
    let empelado = empleados.find(empleado =>
      empleado.id === id
    )
    if (!salarioDb || !empelado) {
      reject(`No existe en salario con el id: ${id}`)
    } else {
      let resultado = {
        empleado: empelado.nombre,
        salario: salarioDb.salario
      };
      resolve(resultado)
    }
  })
};

// getSalario1(2).then(salario => {
//   if (salario)
//     console.log('Salario de base de datos', salario)
// }, (err) => {
//   console.log(err)
// });

let getSalarioRespuesta = (empleado) => {
  return new Promise((resolve, reject) => {
    let salarioDb = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDb) {
      reject(`No se encontro salario para el usuario ${empleado.nombre}`)
    } else {
      resolve({
        nombre: empleado.nombre,
        salario: salarioDb.salario,
        id: empleado.id
      })
    }
  })
};

// getEmpleado(10).then(empleado => {
//   console.log('Empleado de base de datos', empleado)
//   getSalarioRespuesta(empleado).then(resp => {
//     console.log(`El salario de ${resp.nombre} es de ${resp.salario}`)
//   }, err => {
//     console.log(err)
//   })
// }, (err) => {
//   console.log(err)
// });

//Promesas anidadas

let getSalarioAnidado = (empleado => {
  return new Promise((resolve, reject) => {
    let salarioDb = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDb) {
      reject(`No se encontro un salario para el usuario ${empleado.nombre}`)
    } else {
      resolve({
        nombre: empleado.nombre,
        salario: salarioDb.salario,
        id: empleado.id
      })
    }
  })
})

getEmpleado(4).then(empleado => {
  return getSalarioAnidado(empleado);
}).then(resp => {
  console.log(`El salario de ${resp.nombre} es de ${resp.salario}`
  )
}).catch(err => {
  console.log(err)
})