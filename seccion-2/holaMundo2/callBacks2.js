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

let getEmpleado = (id, callback) => {
  let empleadoDb = empleados.find(empleado => empleado.id === id);
  //console.log(empleadoDb)

  if (!empleadoDb) {
    callback(`No existe en usuario con el id: ${id}`)
  } else {
    callback(null, empleadoDb)
  }

}

// getEmpleado(10, (err, empleado) => {
//   if (err) {
//     console.log(err)
//   }
//   console.log(empleado)
// });

let getSalario = (empleado, callback) => {
  let empleadoDb = empleados.find(empleadodb => empleadodb.id === empleado)
  let salarioDb = salarios.find(salario => salario.id === empleadoDb.id)
  //REVISAR
  let resultado = {
    nombre: empleadoDb.nombre,
    salario: salarioDb.salario
  }

  if (!salarioDb) {
    console.log(`No existe salario para el empelado ${empleadoDb.nombre}`)
  } else {
    callback(null, resultado)
  }
}

getSalario(3, (err, empleado) => {
  if (err) {
    console.log(err)
  }
  console.log(empleado)
})