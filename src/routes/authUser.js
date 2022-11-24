const express = require('express');
const HttpStatus = require('http-status');
const { validationResult } = require('express-validator');
const AuthService = require('../service/auth.service')

const router = express.Router();

router.route('/register')
    .post(async (req, res, next) => {
        try {
            const erros = validationResult(req);
            res.status(HttpStatus.OK).send(await new AuthService().registerUser(req.body));
        } catch (e) {
            console.log(e)
            next(e);
        }
    });

router.route('/authenticate')
    .post(async (req, res, next) => {
        try {
            const erros = validationResult(req);
            res.status(HttpStatus.OK).send(await new AuthService().authUser(req.body, res));
        } catch (e) {
            console.log(e)
            next(e);
        }
    });

module.exports = router;

