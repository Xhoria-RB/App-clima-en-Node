const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            desc: 'Direccion de la ciudad para obtener el clima',
            demand: true
        },
        temperatura: {
            alias: 't',
            desc: 'Busca solo la temperatura'
        },
        viento: {
            alias: 'v',
            desc: 'Busca la velocidad del viento'
        }
    })
    .help()
    .argv;
/**
 * options te permite agregar opciones al node app sin necesidad de un command
 * Ej: 
 * node app --direccion Santo Domingo Rep Dom
 * 
 * en vez de
 *node app direccion --cuidad Santo Domingo Rep Dom 
 *
 */

module.exports = {
    argv
};