const axios = require('axios');

let getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad: ${direccion}`)
    }

    let locationCity = resp.data.results[0];
    let coords = locationCity.geometry.location
        //console.log(JSON.stringify(resp.data, undefined, 2));

    return {
        direccion: locationCity.formatted_address,
        lat: coords.lat,
        lng: coords.lng
    }
};

module.exports = {
    getLugarLatLng
}