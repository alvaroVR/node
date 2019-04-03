// let getNombre = async () => {
//   throw new Error('No existe un nombre para ese usuario')
//
//   return 'Alvaro'
// };

let getNombre = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Alvaro')
    }, 3000)

  })

}

let saludo = async () => {
  //Javascript no continuara la funcion hasta que tenga la respuesta del await
  //El await siempre ira con el async, no puede ser incluida sin el async
  let nombre = await getNombre();

  return `Hola ${nombre}`;
}

//getNombre().then(nombre => {
// console.log(nombre)
//}).catch(error => {
//  console.log('Error en Async', error)
//})

saludo().then(mensaje => {
  console.log(mensaje)
})