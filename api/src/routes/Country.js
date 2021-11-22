const { Router } = require('express');
const { Op } = require('sequelize')
const { country, activity } = require('../db')


const router = Router();


router.get("/", async (req, res, next) => { 
    let { name, order } = req.query
    
    if (name) {
        try {
            let foundCountry = await country.findAll({

                where: {
                    name: { [Op.like]: name + '%' },
                },
                include: activity
            });
            foundCountry
                ? res.json(foundCountry)
                : res.send('El pais ingresado no existe')
        } catch (error) {
            res.status(404)
            next(error)
        }
    }

    else if (order) {

        if (order === "ASC") {
            try {
                let ascend = await country.findAll({
                    order: [['name', 'ASC']]

                })
                res.json(ascend)
            }
            catch (error) {
                res.status(404)
                next(error)
            }
        }
    }

    if (order === "DESC") {
        try {
            let descend = await country.findAll({
                order: [['name', 'DESC']]
            })
            res.json(descend)
        } catch (error) {
            res.status(404)
            next(error)
        }
    }



    if (order === 'popAsc') {
        try {
            let byPop = await country.findAll({
                order: [['population', 'ASC']]
            })
            res.json(byPop)
        } catch (error) {
            res.status(404)
            next(error)
        }
    }


    if (order === 'popDesc') {
        try {
            let byPop = await country.findAll({
                order: [['population', 'DESC']]
            })
            res.json(byPop)
        } catch (error) {
            res.status(404)
            next(error)
        }
    }



    else {
        try {
            let Allcountries = await country.findAll({
                include: activity
            })
            res.json(Allcountries)
        } catch (error) {
            next(error)
        }
    }




});




router.get("/:idPais", async (req, res, next) => {
    try {
        let { idPais } = req.params

        let countryDetails = await country.findOne({
            where: {
                id: idPais
            },
            include: activity
        })
        //console.log(countryDetails)
        countryDetails 
            ? res.json(countryDetails)
            : res.send("No se encontraron datos.");
    } catch (error) {
        next(error);
    }
})
 



module.exports = router;




