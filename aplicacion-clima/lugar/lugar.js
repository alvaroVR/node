const axios = require('axios');


const getLugarLatLng = async (dir) => {
  const encodeUrl = encodeURI(dir);

  const instance = axios.create({
    baseURL: `https://rapidapi.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
    headers: {
      'X-RapidAPI-Key': 'caa514a84amshbe479845e47d63fp105bb3jsn2187be7c0600',
      'X-RapidAPI-Host': 'devru-latitude-longitude-find-v1.https://rapidapi.p.rapidapi.com'
    }
  });

  const resp = await instance.get();
  console.log(resp)

  if (resp.data.Results.length === 0) {
    throw new Error(`No hay datos para ${dir}`)
  }
  const data = resp.data.Results[0];
  const direccion = data.name;
  const lat = data.lat;
  const lng = data.lon;

  return {
    direccion,
    lat,
    lng
  }


};

module.exports ={
  getLugarLatLng
}

