const { Router } = require('express');
const { country, activity, db } = require('../db')


const router = Router();


router.get("/", async (req, res, next) => {
    let { name } = req.query

    try {
        let foundcountry = await country.findAll({
            limit: 3,
            where: {
                // name: {
                //     [ iLike ]: '%'+ name 
                // }
            }
        });
        res.json(foundcountry);
    } catch (error) {
        res.status(404)
        next(error)
    }


});

router.get("/:idPais", async (req, res, next) => {
    try {
        let { idPais } = req.params

        const countryDetails = await country.findOne({
            where: {
                id: idPais
            },
            include: activity
        });
        countryDetails
            ? res.json(countryDetails)
            : res.send("No se encontraron actividades para el Pais solicitado.");
    } catch (error) {
        next(error);
    }
})


// GET /countries?name="...":
// Obtener los países que coincidan con el nombre pasado como query parameter (No necesariamente tiene que ser una matcheo exacto)
// Si no existe ningún país mostrar un mensaje adecuado


// GET /countries/{idPais}:
// Obtener el detalle de un país en particular
// Debe traer solo los datos pedidos en la ruta de detalle de país
// Incluir los datos de las actividades turísticas correspondientes
// Ruta de detalle de país: debe contener

//  Los campos mostrados en la ruta principal para cada país (imagen de la bandera, nombre, código de país de 3 letras y continente)
//  Código de país de 3 letras (id)
//  Capital
//  Subregión
//  Área (Mostrarla en km2 o millones de km2)
//  Población
//  Actividades turísticas con toda su información asociada


//  GET /countries?name="...":
// Obtener los países que coincidan con el nombre pasado como query parameter (No necesariamente tiene que ser una matcheo exacto)
// Si no existe ningún país mostrar un mensaje adecuado



module.exports = router;




