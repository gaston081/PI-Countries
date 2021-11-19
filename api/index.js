//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, country } = require('./src/db.js');
const axios = require('axios')


async function apiConnect() {

  try {
    const response = await axios.get('https://restcountries.com/v3/all');
    const result = response.data;
    let infoDb = result.map((country) => {
      
      return {

        id: country.cca3,
        name: country.name.common,
        capital: !country.capital ? 'Dato no disponible' : country.capital[0],
        subregion: !country.subregion ? 'Dato no disponible' : country.subregion,
        continent: country.continents[0] && country.continents[0],
        area: country.area,
        population: country.population,
        image: !country.flags ? 'Bandera no encontrada' : country.flags[1],
      }
    })
      
    await country.bulkCreate(infoDb);
    console.log("DB loaded")

  } catch (error) {
    return console.log('error', error);
  }
}



// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'), apiConnect() // eslint-disable-line no-console
  });
});
