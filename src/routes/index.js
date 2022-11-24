const router = require('express').Router();
const routeUser = require('./user.route');
const authUser = require('../routes/authUser');


router.use('/user', routeUser);
router.use('/auth', authUser);


module.exports = router;
