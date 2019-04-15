const axios = require('axios');

const getClima = async (lat, lng) => {
  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=bf207187c40383ed7ec3ab093c83192b`);

  return resp.data.main.temp;
};

module.exports = {
  getClima
}