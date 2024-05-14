// I  have created models, created seeds, created schema and created database, I used DBeaver to make sure it is connected and works. All functions and variables are consistant for what I need them to do. ////
// Next I need to create effective routes. I will be careful to ensure all variables are just as precises as the id and and data in my models.//


// Setting up my req and res and additional codes as needed. If I need to troubleshoot my routes, utilizing consule.log (leaving a relevant message) will help me through this! //

// I am ensuring I have one index.js in CONTROLLER and one index.js in API folder with code that applies to each//

const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');
const dashboardRoutes = require('./dashboardRoutes.js');
router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use((req, res) => {
    res.status(404).end();
});
module.exports = router;

// kaBAM //

// Next: I ensured Controller routes completed and then moved to API routes and completed //