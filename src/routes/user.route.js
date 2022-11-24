const express = require('express');
const HttpStatus = require('http-status');
const { validationResult } = require('express-validator');
const UserService = require('../service/user.service')

const router = express.Router();

router.route('/')
    // .post(async (req, res, next) => {
    //     try {
    //         const erros = validationResult(req);
    //         res.status(HttpStatus.OK).send(await new UserService().userCreate(req.body, erros));
    //     } catch (e) {
    //         console.log(e)
    //         next(e);
    //     }
    // })
    .get(async(req, res, next) => {
        try {
            res.status(HttpStatus.OK).send(await new UserService().listAllUsers());
        } catch (e) {
            console.log(e)
            next(e);
        }
    })

router.route('/:id')
    .get( async (req, res, next) => {
        try {
            const erros = validationResult(req);
            res.status(HttpStatus.OK)
                .send(await new UserService().listUser(req.params.id));
        } catch (e) {
            next(e);
        }
    })
    .patch(async (req, res, next) => {
        try {
            const erros = validationResult(req);
            res.status(HttpStatus.OK).send(await new UserService().updateUser(req.params.id, req.body, erros));
        } catch (e) {
            next(e);
        }
    })
    .delete(async (req, res, next) => {
        try {
            const erros = validationResult(req);
            res.status(HttpStatus.OK).send(await new UserService().deleteUser(req.params.id));
        } catch (e) {
            next(e);
        }
    });

module.exports = router;
