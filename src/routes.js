const express = require ('express')
const routes = express.Router()
const controller = require ('./controllers/controller')

routes.get('/medicoes', controller.list)

module.exports = routes;