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

router.get('/', async (req, res, next) => {

    try {
        let AllActivities = await activity.findAll({
            include: country
        })
        res.json(AllActivities)
    } catch (error) {
        next(error)
    }
})

module.exports = router;