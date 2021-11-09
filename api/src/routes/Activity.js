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




router.get("/", async (req, res, next) => { // find actividad x nombre y paises
    let { name } = req.query

    if (name) {
        try {
            let foundActivity = await activity.findAll({

                where: { name: name },
                include: country
            });
            foundActivity
                ? res.json(foundActivity)
                : res.send('La actividad ingresada no existe')
        } catch (error) {
            res.status(404)
            next(error)
        }
    }
    else {
        try {
            let AllActivities = await activity.findAll({
                include: country
            })
            AllActivities ?
                res.json(AllActivities)
                : res.send('Sin datos')
        } catch (error) {
            next(error)
        }
    }
})


module.exports = router;