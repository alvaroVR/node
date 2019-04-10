const fs = require('fs');


crearArchivo = (base) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`El valor ingresado ${base}, no es un número`);
      return
    }
    let data = '';
    for (let i = 1; i <= 10; i++) {
      data += `${base} * ${i} = ${i * base} \n`
    }

    fs.writeFile(`tablas/Tabla-del-${base}.txt`, data, (err) => {
      if (err)
        reject(err);
      else
        resolve(`tabla-del-${base}.txt`);
    });
  })
};

module.exports = {
  crearArchivo
};