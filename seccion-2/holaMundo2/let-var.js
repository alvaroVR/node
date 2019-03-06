let nombre = 'Wolverine'

/* Asi no va a tomar el let
if (true) {
  let nombre = 'Magneto'
}
*/

/* aca si va a tomar el let ya que se esta utilizando la inicializacion nombre
if (true) {
  nombre = 'Magneto'
}
*/

/* var reemplaza la variable con la ultima registrada
* No se puede volver a inicializar mas de una vez los let
*
* */
let i;

for (let i = 0; i <= 5; i++) {
  console.log(`i: ${i}`)
  //Aca no se inicializara el i declarado, ya que let i esta siendo utilizado en este scope y no por fuera
}

for (i = 0; i <= 5; i++) {
  console.log(`i: ${i}`)
  //Aca ya se visualizara i, ya que se esta utilizando una variable declarada anteriormente y no se esta declarando dentro del scope
}

console.log(i)

console.log(nombre)