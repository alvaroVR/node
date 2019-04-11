const fs = require('fs');


crearArchivo = (base, limite) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`El valor ingresado ${base}, no es un número`);
      return
    }
    if (!Number(limite)) {
      reject(`El valor ingresado ${limite}, no es un número`);
      return
    }
    let data = '';
    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${i * base} \n`
    }

    fs.writeFile(`tablas/Tabla-del-${base} x ${limite}.txt`, data, (err) => {
      if (err)
        reject(err);
      else
        resolve(`tabla-del-${base} x ${limite}.txt`);
    });
  })
};

listarTabla = (base, limite = 10) => {

  for (let i = 1; i <= limite; i++) {
    console.log(`${i} * ${base} = ${i * base}`);
  }

};

module.exports = {
  crearArchivo,
  listarTabla
};