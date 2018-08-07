const axios = require('axios');

let getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=edea6f57849c4fa59a9c3366ca1f2917`);
    if (resp.cod === 400) {
        throw new Error('No se encontro resultado para esta locacion');
    }
    // let temp = resp.data.main.temp;
    // return temp;
    return {
        clima: resp.data.weather[0].main,
        temperatura: resp.data.main.temp,
        nivelMar: resp.data.main.sea_level,
        velocidadViento: resp.data.wind.speed
    };


};


module.exports = {
    getClima
}