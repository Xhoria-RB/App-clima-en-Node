const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


let getInfo = async(direccion) => {

    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let climaCuidad = await clima.getClima(coors.lat, coors.lng);

        if (argv.temperatura) {
            return `La temperatura de ${direccion} es ${climaCuidad.temperatura}℃`
        } else if (argv.viento) {
            return `La velocidad del viento en ${direccion} es de ${climaCuidad.velocidadViento} m/s`
        } else {
            return ` El clima en ${direccion} es ${climaCuidad.clima} \n
            \r La temperatura de ${direccion} es ${climaCuidad.temperatura}℃ \n
            \r La velocidad del viento en ${direccion} es de ${climaCuidad.velocidadViento} m/s\n
            \r El nivel del mar en ${direccion} es ${climaCuidad.nivelMar} hPa(presión atmosférica en el agua)`
        }

    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));


//Todo esto sintetizado en getInfo
// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => console.log(resp))
//     .catch(e => console.log(e));

// console.log(clima.getClima(18.4860575, -69.93121169999999)
//     .then(resp => console.log(resp))
//     .catch(e => console.log(e))
// );