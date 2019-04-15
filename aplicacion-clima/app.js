const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    desc: 'Direcicon para obtener el clima',
    demand: true
  }
}).argv;

//console.log();

// const getInfo = async (direccion) => {
//   let localidad = {
//     lat: '',
//     lon: '',
//     ciudad: '',
//     temperatura: ''
//   };
//
//   await lugar.getLugarLatLng(direccion).then(resp => {
//
//     localidad = {
//       lat: resp.lat,
//       lon: resp.lng,
//       ciudad: resp.direccion
//     };
//   }).catch(err => {
//     console.log(`No se encontro la localidad ${direccion}`)
//   });
//
//   await clima.getClima(parseFloat(localidad.lat), parseFloat(localidad.lon))
//     .then(resp => {
//       localidad.temperatura = resp;
//     })
//     .catch(err => console.log(err))
//
//   return localidad;
//
// };

const getInfo = async (direccion) => {

  try {
    const coords = await lugar.getLugarLatLng(direccion);
    const temperature = await clima.getClima(coords.lat, coords.lng);
    return `La temperatura de ${coords.direccion} es de ${temperature}`
  } catch (e) {
    return `No se pudo determinar la temperatura de ${direccion}°`
  }


};

getInfo(argv.direccion).then(console.log).catch(console.log)
