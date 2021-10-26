const { Router } = require('express');

const { activity, country } = require('../db');
const Country = require('../models/Country');

const router = Router();

router.post('/post', async (req, res, next) => {
    let { idCountry, name, dificult, duration, season } = req.body;

    try {
        const newActivity = await activity.create({
            name,
            dificult,
            duration,
            season
        })
        const relatedCountry = await country.findByPk(idCountry);
        const ActivityFound = await activity.findOne({
            where: { name: name }
        })
        
        res.json(await relatedCountry.addActivity(ActivityFound))
        

    } catch (error) {
        console.log(error)
        next(error);

    }

})


// POST /activity:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
// Crea una actividad turística en la base de datos

// ID
// Nombre
// Dificultad (Entre 1 y 5)
// Duración
// Temporada (Verano, Otoño, Invierno o Primavera)



module.exports = router;