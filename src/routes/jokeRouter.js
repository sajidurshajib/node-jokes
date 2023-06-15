const express = require('express')
const jokesService = require('../services/JokesService')

const router = express.Router()

router
    .route('/:id')
    .get((req, res, next) => {
        jokesService
            .show(req.params.id)
            .then((data) => res.json({ data }))
            .catch((e) => next(e))
    })
    .patch((req, res, next) => {
        jokesService
            .update(req.params.id, req.body)
            .then((data) => res.json({ data }))
            .catch((e) => next(e))
    })
    .delete((req, res, next) => {
        jokesService
            .delete(req.params.id)
            .then((data) => res.json({ data }))
            .catch((e) => next(e))
    })

router
    .route('/')
    .get(async (req, res, next) => {
        try {
            const data = await jokesService.index()
            res.json({ data })
        } catch (e) {
            next(e)
        }
    })
    .post((req, res, next) => {
        jokesService
            .create({ ...req.body })
            .then((data) => res.json({ data }))
            .catch((e) => next(e))
    })

module.exports = router
