const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countryRouter = require('../routes/Country');
const activityRouter = require('../routes/Activity');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/country', countryRouter)
router.use('/activity', activityRouter)

module.exports = router;
